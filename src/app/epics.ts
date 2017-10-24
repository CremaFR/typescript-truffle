import { combineEpics, Epic } from 'redux-observable';
import {INIT_WEB3, initTest} from "./vote/actions";
import {Observable} from "rxjs/Observable";

const VoteContract = require("../../build/contracts/Vote.json");
const contract = require('truffle-contract');


function connectVote(action : INIT_WEB3) {
    // Using truffle-contract we create the authentication object.
    const authentication = contract(VoteContract);
    const web3 = action.web3;
    authentication.setProvider(web3.currentProvider);

    console.log("web3", web3);
    console.log("authentication",authentication);

    //dirty hack for web3@1.0.0 support for localhost testrpc, see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
    if (typeof authentication.currentProvider.sendAsync !== "function") {
        authentication.currentProvider.sendAsync = function () {
            return authentication.currentProvider.send.apply(
                authentication.currentProvider, arguments
            );
        };
    }

    // Declaring this for later so we can chain functions on Authentication.
    var authenticationInstance

    const res = Observable.fromPromise(authentication.deployed())
    return res
}


const connectContract = action$ =>
    action$.ofType('INIT_WEB3').flatMap( action => connectVote( action )).map( instance => initTest(instance) );


const epics: Array<Epic<any, any>> = [connectContract];

export default ( action$, store ) => combineEpics( ...epics )( action$, store ).catch( ( err, source ) => {
    console.log( err, source );
    return source;
} );
