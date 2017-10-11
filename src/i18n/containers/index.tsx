import * as React           from 'react'
import { IntlProvider }     from 'react-intl'
import { connect }          from 'react-redux'

import { Stores }            from '../reducers'


export const I18nProvider = connect(
    ( state: Stores, props ) => {
        const orEmpty = obj => obj || {};
        const locale = state.i18n.locale;
        const defaultLocale = state.i18n.defaultLocale;
        const messages = locale === defaultLocale ? orEmpty( state.i18n.messages[ locale ] ) : { ...orEmpty( state.i18n.messages[ defaultLocale ] ), ...orEmpty( state.i18n.messages[ locale ] ) };
        const formats = locale === defaultLocale ? orEmpty( state.i18n.formats[ locale ] ) : { ...orEmpty( state.i18n.formats[ defaultLocale ] ), ...orEmpty( state.i18n.formats[ locale ] ) };
        return { defaultLocale, messages, locale, formats, }
    } )( props => (
        <IntlProvider messages={ props.messages }
                      defaultLocale={ props.defaultLocale }
                      locale={ props.locale }
                      formats={ props.formats }
                      children={ props.children }/>
    )
);
