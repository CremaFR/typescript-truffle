import { combineEpics, Epic }      from 'redux-observable';
import {connectContract, contractConnected, initWatcher, vote}         from "./vote/epics";

const epics: Array<Epic<any, any>> = [connectContract, contractConnected,initWatcher, vote];

export default ( action$, store ) => combineEpics( ...epics )( action$, store ).catch( ( err, source ) => {
    console.log( err, source );
    return source;
} );
