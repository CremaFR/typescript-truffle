// @formatter:off
import 'rxjs'
import 'reflect-metadata'
import * as React                                                            from 'react'
import * as ReactDom                                                         from 'react-dom'
import { Redirect, Route, Switch }                                           from 'react-router'
import { Provider }                                                          from 'react-redux'
import createHistory                                                         from 'history/createHashHistory'
import { createStore, combineReducers, applyMiddleware }                     from 'redux'
import { composeWithDevTools }                                               from 'redux-devtools-extension'
import { ConnectedRouter, routerMiddleware }                                 from 'react-router-redux'
import { IntlProvider, addLocaleData }                                       from 'react-intl'
import * as en                                                               from 'react-intl/locale-data/en';

import stores, { Stores }                                                    from './reducers'
// Load collaboration modules (to have auto-registering of modules)
import './app.scss'


import { Layout } from 'app/layout'
import ScrollToTop from 'app/utils/ScrollToTop';
import { TaxCalculation } from 'app/taxcalculation';
import { Dashboard } from 'app/dashboard'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware( history );

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers<Stores>( {
        ...stores
    } ),
    composeWithDevTools(
        applyMiddleware(
            middleware
        )
    )
);

addLocaleData(en);

const AppPage = () => (
    <Provider store={ store }>
        <IntlProvider locale="en">
            <ConnectedRouter history={ history }>
                <ScrollToTop>
                    <Layout>
                        <Switch>
                            {/*<Route path="/" exact component={ Dashboard }/>*/}
                            <Route path="/tax-calculation" component={ TaxCalculation }/>
                            <Redirect to="/tax-calculation"/>
                        </Switch>
                    </Layout>
                </ScrollToTop>
            </ConnectedRouter>
        </IntlProvider>
    </Provider>
);


export default function () {
    const app = document.getElementById( 'app' );
    if( app != null ) {
        ReactDom.render( <AppPage/>, app );
    }
}
