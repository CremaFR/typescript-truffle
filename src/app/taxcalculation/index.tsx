import * as React from 'react';
import {Container, Header} from 'semantic-ui-react'

import './TaxCalculation.scss';
import {Redirect, Route, Switch} from "react-router";

import { Welcome } from './containers';


const TaxCalculation = (props: any) => {
    return (
        <Container className="tax-calculation">
            <Switch>
                <Route path="/tax-calculation/welcome" exact component={ Welcome }/>
                <Redirect to="/tax-calculation/welcome"/>
            </Switch>
        </Container>
    );
}

export { TaxCalculation };
