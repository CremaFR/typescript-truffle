import { combineEpics, Epic }      from 'redux-observable';
import {connectContract, ContractConnected, vote}         from "./vote/epics";

const epics: Array<Epic<any, any>> = [connectContract, ContractConnected, vote];

export default ( action$, store ) => combineEpics( ...epics )( action$, store ).catch( ( err, source ) => {
    console.log( err, source );
    return source;
} );
