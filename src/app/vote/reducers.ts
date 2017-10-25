import {Reducer, ReducersMapObject} from 'redux';

import * as actions from './actions';
import Web3 = require("web3");
import {INIT_WEB3, INIT_VOTE_CONTRACT} from "./actions";
const VoteContract = require("./Vote.json");
const contract = require('truffle-contract');




export const defaultState = (): any => ({
   web3 : null
});

export type Store = {
    vote: {
        web3 : Web3;
        voteInstance: any;
        currentResult : boolean;
        account : any
    },
}

const reducer: Reducer<any> = (state = defaultState(), action: actions.Actions) => {
    switch (action.type){
        case INIT_WEB3:
            const web3 = action.web3;
            return { ...state, web3 };
        case INIT_VOTE_CONTRACT:
            console.log(action);
            const voteInstance = action.res.voteInstance;
            const currentResult = action.res.currentResult;
            const account = action.res.account;
            return { ...state, voteInstance, currentResult, account };
        default:
            return state
    }
};

export const reducers: ReducersMapObject = {
    vote: reducer
};
