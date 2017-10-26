import {
    currentResult, hasVoted, INIT_ACCOUNT, INIT_VOTE_CONTRACT, INIT_WEB3, initAccount, initVoteContract,
    VOTE
}  from "./actions";
import { Observable }           from "rxjs/Observable";

const VoteContract = require("../../../build/contracts/Vote.json");
const contract = require('truffle-contract');


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


function getCurrentResult( store : any ) {
    const voteStore = store.getState().vote;
    return Observable.fromPromise(voteStore.voteInstance.currentResult.call().then( res => {
        return currentResult(res)
    }))
}


function writeVote(action: VOTE, store : any){
    const voteStore = store.getState().vote;
    voteStore.voteInstance.participate(action.vote, { from : voteStore.account } );
    return Observable.fromPromise(Promise.resolve(true));
}

/**
 * TODO Return multiple actions
 * @param action$
 */
export const connectContract = action$ =>
    action$.ofType('INIT_WEB3').flatMap( action => connectVote(action).flatMap( cv => getAccount(action).flatMap(ga => [cv, ga]) ));

export const ContractConnected = (action$, store) =>
    action$.ofType('INIT_VOTE_CONTRACT', 'GET_CURRENT_RESULT').flatMap( action => getCurrentResult(store));

export const vote = (action$, store) =>
    action$.ofType('VOTE').flatMap( action => writeVote( action, store )).map( res => hasVoted(res) );


export const getCurrrentRes = action$ => action$.ofType('TODO');