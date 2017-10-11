import { combineEpics, Epic } from 'redux-observable';

const epics: Array<Epic<any, any>> = [];

export default ( action$, store ) => combineEpics( ...epics )( action$, store ).catch( ( err, source ) => {
    console.log( err );
    return source;
} );
