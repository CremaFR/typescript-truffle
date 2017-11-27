import {
    currentResult, hasVoted, INIT_ACCOUNT, INIT_VOTE_CONTRACT, INIT_WEB3, initAccount, initVoteContract,
    VOTE
}  from "./actions";
import { Observable }           from "rxjs/Observable";

const VoteContract = require("../../../build/contracts/Vote.json");
const contract = require('truffle-contract');

/**
 * Get the instance of our deployed contract
 * @param action
 * @returns {any}
 */
function connectVote(action : INIT_WEB3): Observable< INIT_VOTE_CONTRACT > {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(VoteContract);
    const web3 = action.web3;
    authentication.setProvider(web3.currentProvider);

    //dirty hack for web3@1.0.0 support for localhost testrpc, see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
    if (typeof authentication.currentProvider.sendAsync !== "function") {
        authentication.currentProvider.sendAsync = function () {
            return authentication.currentProvider.send.apply(
                authentication.currentProvider, arguments
            );
        };
    }
    return Observable.fromPromise(authentication.deployed().then( voteInstance => initVoteContract( voteInstance )));
}

function getAccount( action : INIT_WEB3 ): Observable< INIT_ACCOUNT >{
    const web3 = action.web3;
    return Observable.fromPromise(web3.eth.getAccounts().then( ( accounts ) => {
        console.log('account', accounts)
        return initAccount(accounts[0]);
    }))
}

/**
 *
 * @param store
 * @returns {any}
 */
function getCurrentResult( store : any ) {
    const voteStore = store.getState().vote;
    return Observable.fromPromise(voteStore.voteInstance.currentResult.call().then( res => {
        return currentResult(res)
    }))
}

/**
 * Execute a transaction to vote on the blockchain
 * return a resolved promise because this write action returns a tx id
 * See registerEventVoter below to see how to catch the result of the action
 * @param action
 * @param store
 */
function writeVote(action: VOTE, store : any){
    const voteStore = store.getState().vote;
    voteStore.voteInstance.participate(action.vote, { from : voteStore.account } );
    return Observable.fromPromise(Promise.resolve(true));
}

/**
 * Create an Observable to listen to Voted event described in the contract
 * fromBlock is to retrieve events on the past default value is latest
 * I set 1000 to retrieve events I have done before
 * @param store
 */
function registerEventVoter( store : any  ){
    const fromBlock = 1000;
    const voteInstance = store.getState().vote.voteInstance;
    const event = voteInstance.Voted({},{ fromBlock : fromBlock , topics : null});
    console.log(event)
    return Observable.create(
        observer => { event.watch( (error, res) => {
            if (error){ console.error(error); }
            else {
                observer.next(hasVoted(res.args.voter, res.args.vote));
                observer.next(currentResult(res.args.currentResult));
            }
        }) }
    )
}


export const connectContract = action$ =>
    action$.ofType('INIT_WEB3').flatMap( action => connectVote(action).flatMap( cv => getAccount(action).flatMap(ga => [cv, ga]) ));

export const contractConnected = (action$, store) =>
    action$.ofType('INIT_VOTE_CONTRACT', 'GET_CURRENT_RESULT').flatMap( action => getCurrentResult(store));

export const initWatcher = (action$, store) =>
    action$.ofType('INIT_VOTE_CONTRACT').flatMap( action => registerEventVoter(store))

export const vote = (action$, store) =>
    action$.ofType('VOTE').flatMap( action => writeVote( action, store )).flatMap( res => getCurrentResult(store) );
