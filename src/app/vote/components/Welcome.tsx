import * as React from 'react'
import * as classNames from 'classnames'
import {
    Button,
    Header,
    Select,
    Input,
    Checkbox,
    Container,
} from 'semantic-ui-react'

import { injectIntl, FormattedHTMLMessage, FormattedMessage, InjectedIntl, InjectedIntlProps } from 'react-intl'


import './Welcome.scss'
import {DisplayOrNull} from "app/utils/DisplayOrNull";


type WelcomeProps = {
}

const WelcomeBase: React.ComponentType<WelcomeProps & InjectedIntlProps> = props => {

    console.log("welcome props",props);

    return (
        <div className="welcome">
            HELLO
        </div>
    );
}
const Welcome = injectIntl( WelcomeBase );


export { Welcome };

