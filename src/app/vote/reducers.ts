import {Reducer, ReducersMapObject} from 'redux';

import * as actions from './actions';
import Web3 = require("web3");
import {INIT_WEB3, INIT_VOTE_CONTRACT, INIT_ACCOUNT, CURRENT_RESULT, hasVoted, HAS_VOTED} from "./actions";
const VoteContract = require("./Vote.json");
const contract = require('truffle-contract');




export const defaultState = (): any => ({
    web3 : null,
    voters : []
});

export type Store = {
    vote: {
        web3 : Web3;
        voteInstance: any;
        currentResult : boolean;
        account : string;
        voters : Array<any>;
    },
}

const reducer: Reducer<any> = (state = defaultState(), action: actions.Actions) => {
    switch (action.type){
        case INIT_WEB3:
            const web3 = action.web3;
            return { ...state, web3 };
        case INIT_VOTE_CONTRACT:
            const voteInstance = action.voteInstance;
            return { ...state, voteInstance };
        case INIT_ACCOUNT:
            const account = action.account;
            return { ...state, account };
        case CURRENT_RESULT:
            const currentResult = action.result;
            return { ...state, currentResult };
        case HAS_VOTED:
            const voters = state.voters.slice();
            voters.push(action.voter);
            return { ...state, voters };
        default:
            return state
    }
};

export const reducers: ReducersMapObject = {
    vote: reducer
};
