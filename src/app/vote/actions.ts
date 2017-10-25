import { ActionCreator } from 'react-redux';
import {Action} from "redux";
import Web3 = require("web3");

export type INIT_WEB3 = {
    type : 'INIT_WEB3',
    web3 : Web3
};
export const INIT_WEB3 = 'INIT_WEB3';

export function initWeb3(web3 : Web3)  {
    return { type: INIT_WEB3, web3 }
}


export type INIT_VOTE_CONTRACT = {
    type : 'INIT_VOTE_CONTRACT',
    res : {
        voteInstance : any,
        currentResult : boolean
    }
};
export const INIT_VOTE_CONTRACT = 'INIT_VOTE_CONTRACT';

export function initTest(res : any)  {
    return { type: INIT_VOTE_CONTRACT, res }
}

export type VOTE = {
    type : 'VOTE',
    vote : boolean
};
export const VOTE = 'VOTE';

export function vote(vote : boolean)  {
    return { type: VOTE, vote }
}

export type HAS_VOTED = {
    type : 'HAS_VOTED',
    vote : boolean
};
export const HAS_VOTED = 'v';

export function hasVoted(vote : boolean)  {
    return { type: HAS_VOTED, vote }
}



export type Actions = INIT_WEB3 | INIT_VOTE_CONTRACT | VOTE | HAS_VOTED;
