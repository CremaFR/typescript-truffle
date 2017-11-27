import * as React               from 'react'
import * as classNames          from 'classnames'
import { Menu, Icon }                 from "semantic-ui-react";

import './Header.scss'

type HeaderProps = {
}


const Header: React.ComponentType<HeaderProps> = props => {

    console.log("Header props",props);

    return (
        <Menu>
            <Menu.Item
                name='editorials'
                onClick={this.handleItemClick}
            >
                Editorials
            </Menu.Item>

            <Menu.Item
                name='reviews'
                onClick={this.handleItemClick}
            >
                Reviews
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item href="https://github.com/CremaFR/typescript-truffle" target="_blank" >
                    <Icon name='github' size="large"/>
                </Menu.Item>
                <Menu.Item href="https://ethereum.stackexchange.com/users/8540/crema" target="_blank" >
                    <Icon name='stack overflow' size="large"/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export { Header };

