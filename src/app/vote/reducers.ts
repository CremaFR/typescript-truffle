import {Reducer, ReducersMapObject} from 'redux';

import * as actions from './actions';
import Web3 = require("web3");
import {INIT_WEB3} from "./actions";
const VoteContract = require("./Vote.json");
const contract = require('truffle-contract');



function connectContract() {
    return function (dispatch) {
        // Using truffle-contract we create the authentication object.
        const authentication = contract(VoteContract)
        authentication.setProvider(provider)

        // Declaring this for later so we can chain functions on Authentication.
        var authenticationInstance

        // Get current ethereum wallet.
        var coinbase = web3.eth.coinbase;

        authentication.deployed().then(function (instance) {
            authenticationInstance = instance
            console.log("ss", instance)
            // Attempt to sign up user.
            // authenticationInstance.signup(name, {from: coinbase})
            //     .catch(function(result) {
            //         // If error...
            //     })
            //     .then(function(result) {
            //         // If no error, login user.
            //         dispatch(loginUser())
            //     })
        })
    }
}


export const defaultState = (): any => ({
   web3 : null
});

export type Store = {
    vote: {
        web3 : Web3
    },
}

const reducer: Reducer<any> = (state = defaultState(), action: actions.Actions) => {
    switch (action.type){
        case INIT_WEB3:
            const web3 = action.web3;
            return { ...state, web3 };
        default:
            return state
    }
};

export const reducers: ReducersMapObject = {
    vote: reducer
};
