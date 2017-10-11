import * as flux            from '../../flux'
import * as actions         from '../actions'

export type State = {
    defaultLocale: string;
    locale: string;
    messages: { [locale: string]: Object };
    formats: { [locale: string]: Object };
};
export const defaultState = {
    defaultLocale: 'en-GB',
    locale: 'en-GB',
    messages: {},
    formats: {},
};

export type Stores = {
    i18n: State;
}

function flatten( obj: Object, parent: string = '' ): { [key: string]: string } {
    return Object.keys( obj ).reduce( ( acc, key ) => {
        const ck = parent === '' ? key : `${parent}.${key}`;
        if( typeof obj[ key ] === 'object' ) {
            return { ...acc, ...flatten( obj[ key ], ck ) };
        }
        return { ...acc, [ck]: obj[ key ] };
    }, {} );
}

/** Convert the provided action to a readable message format */
function load( state: State, action: actions.Load ) {
    const messagesByLocale = Object.keys( action.payload.data.messages ).reduce( ( acc, c ) => ({ ...acc, [c]: flatten( action.payload.data.messages[ c ] ) }), {} );
    return {
        ...state,
        defaultLocale: action.payload.defaultLocale,
        locale: action.payload.defaultLocale,
        formats: action.payload.data.formats,
        messages: messagesByLocale
    };
}

function changeLanguage( state: State, action: actions.ChangeLanguage ) {
    return {
        ...state,
        locale: action.payload,
    }
}

export const reducers = {
    i18n: ( state: State = defaultState, action: actions.Actions ): State => {
        return flux.Reducing
            .of( actions.Load.Type, load )
            .or( actions.ChangeLanguage.Type, changeLanguage )
            .exec( state, action );
    }
};
