import * as React from 'react';
import {push} from 'react-router-redux';
import {connect, Dispatch} from 'react-redux';

import { Welcome as WelcomeBase} from '../components';
import {Stores} from "../../reducers";

import * as actions from '../actions';






function mapStateToProps(state: Stores, props: any): { } {
    return {
        currentResult : state.vote.currentResult,
        voter : state.vote.voter
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>, props: any) {
    return {
        vote: ( vote : boolean) => {
            dispatch( actions.vote(vote) );
        },
    };
}



const Welcome = connect(mapStateToProps, mapDispatchToProps)( (props) => (
    <WelcomeBase { ...props } />
) );

export { Welcome };
