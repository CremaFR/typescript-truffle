import * as React from 'react';
import {Container, Header} from 'semantic-ui-react'

import './Vote.scss';
import {Redirect, Route, Switch} from "react-router";

import { Welcome } from './containers'


const Vote = (props: any) => {
    return (
        <Container className="vote">
            <Switch>
                <Route path="/vote/welcome" component={ Welcome }/>
                <Redirect to="/vote/welcome"/>
            </Switch>
        </Container>
    );
};

export { Vote };
