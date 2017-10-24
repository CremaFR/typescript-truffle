import * as React from 'react'
import getWeb3 from "./getWeb3";
import Web3 = require("web3");
import {initWeb3} from "../vote/actions";
import {connect, Dispatch} from 'react-redux';
import {Stores} from "../reducers";


type Web3ProviderProps = {
    children : any;
    initWeb3 : ( web3 :Web3) => void;
}

class Web3ProviderBase extends React.Component<Web3ProviderProps>  {

    componentDidMount(){
        getWeb3.then( (web3 : Web3 ) => {
            this.props.initWeb3(web3);
        })
    }

    render() {
        return this.props.children;
    }
}


function mapStateToProps(state: Stores, props: any): { } {
    return {
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>, props: any) {
    return {
        initWeb3: ( web3 ) => {
            dispatch( initWeb3( web3 ) )
        },
    };
}



const Web3Provider = connect(mapStateToProps, mapDispatchToProps)( (props) => (
    <Web3ProviderBase { ...props } />
) );

export { Web3Provider };
