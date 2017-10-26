import * as React               from 'react'
import * as classNames          from 'classnames'
import { Button }               from "semantic-ui-react";

import Web3 = require("web3");
import './Welcome.scss'

type WelcomeProps = {
    currentResult: boolean;
    vote: (vote : boolean) => void;
    voter: any;
}


function result( result : boolean) : string {
    return result ? "VOTE OK" : "VOTE NON OK"
}


const Welcome: React.ComponentType<WelcomeProps> = props => {

    console.log("welcome props",props);

    return (
        <div className="welcome">
            <h1> Vote Contract Web Interface </h1>
            <h2> Smart Contract Example </h2>
            <p> The current vote result is: { result(props.currentResult) }</p>

            <div>
                <Button onClick={ _ => props.vote(true)} > Vote YES </Button>
                <Button onClick={ _ => props.vote(false)} > Vote NO </Button>
            </div>

            <div>
                <h1>  EVENTS </h1>
                <ul>
                    <li> { `address:  ${props.voter ? props.voter.address : null} voted :  ` }</li>
                </ul>
            </div>


        </div>
    );
}

export { Welcome };

