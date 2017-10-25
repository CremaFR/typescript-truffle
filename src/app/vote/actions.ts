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


export type INIT_V0TE_CONTRACT = {
    type : 'INIT_V0TE_CONTRACT',
    instance : any
};
export const INIT_V0TE_CONTRACT = 'INIT_V0TE_CONTRACT';

export function initTest(instance : any)  {
    return { type: INIT_V0TE_CONTRACT, instance }
}





export type Actions = INIT_WEB3 | INIT_V0TE_CONTRACT;
