import * as React from 'react'
import * as classNames from 'classnames'


import './Welcome.scss'
import {DisplayOrNull} from "app/utils/DisplayOrNull";
import Web3 = require("web3");


type WelcomeProps = {
    web3 : Web3,
    voteInstance : any,
    currentResult: boolean
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
        </div>
    );
}

export { Welcome };

