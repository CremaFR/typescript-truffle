import { ActionCreator } from 'react-redux';
import {Action} from "redux";
import Web3 = require("web3");

export const INIT_WEB3 = 'INIT_WEB3';
export const INIT_VOTE_CONTRACT = 'INIT_VOTE_CONTRACT';
export const VOTE = 'VOTE';
export const HAS_VOTED = 'HAS_VOTED';
export const CURRENT_RESULT = 'CURRENT_RESULT';
export const INIT_ACCOUNT = 'INIT_ACCOUNT';



/*******************************************************************************************************
 *
 *                                              INITIALISATION
 *
 *******************************************************************************************************/

export type INIT_WEB3 = {
    type : 'INIT_WEB3',
    web3 : Web3
};
export function initWeb3(web3 : Web3)  {
    return { type: INIT_WEB3, web3 }
}



export type INIT_VOTE_CONTRACT = {
    type : 'INIT_VOTE_CONTRACT',
    voteInstance : any
};
export function initVoteContract(voteInstance : any)  {
    return { type: INIT_VOTE_CONTRACT, voteInstance }
}



export type INIT_ACCOUNT = {
    type : 'INIT_ACCOUNT',
    account : string
};
export function initAccount(account : string)  {
    return { type: INIT_ACCOUNT, account }
}



/*******************************************************************************************************
 *
 *                                              INTERACTION
 *
 *******************************************************************************************************/
export type CURRENT_RESULT = {
    type : 'CURRENT_RESULT',
    result : boolean
};
export function currentResult(result : boolean)  {
    return { type: CURRENT_RESULT, result }
}

export type VOTE = {
    type : 'VOTE',
    vote : boolean
};
export function vote(vote : boolean)  {
    return { type: VOTE, vote }
}

export type HAS_VOTED = {
    type : 'HAS_VOTED',
    vote : boolean
};
export function hasVoted(vote : boolean)  {
    return { type: HAS_VOTED, vote }
}



export type Actions = INIT_WEB3 | INIT_VOTE_CONTRACT | VOTE | HAS_VOTED | CURRENT_RESULT | INIT_ACCOUNT;
