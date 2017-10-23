import {Reducer, ReducersMapObject} from 'redux';
import * as flux from 'flux';

import * as actions from './actions';
import getWeb3 from 'app/utils/getWeb3'
var VoteContract = require("./Vote.json");
// const contract = require('truffle-contract')


function initWeb3() {
    return getWeb3
        .then( results => {
            this.setState( {
                web3: results.web3
            } )

            // Instantiate contract once web3 provided.
            this.instantiateContract()
        } )
        .catch( () => {
            console.log( 'Error finding web3.' )
        } )
}

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
    // voteContract: connectContract(),
    web3: initWeb3()
});

export type Store = {
    voteContract: any,
}


/*******************************************************************************************************
 *
 *                                              ACTIONS
 *
 *******************************************************************************************************/

function resetForm(state: any, action: actions.resetForm): any {
    return {
        ...defaultState()
    }
}

const reducer: Reducer<any> = (state = defaultState(), action: actions.Actions) => flux.Reducing
    .of(actions.addCategory.Type, resetForm)
    .or(actions.resetForm.Type, resetForm)
    .exec(state, action);

export const reducers: ReducersMapObject = {
    taxcalculation: reducer
};
