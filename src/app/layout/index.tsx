import * as React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './layout.scss';


const Layout = ( props: any ) => (
    <div className="tax-app-layout">
        <header>
            <Link to="/">
                <Icon name='grid layout' size="big"/>
            </Link>
        </header>
        <Link to="/">
            <Icon name="bars" circular className="menu"/>
        </Link>
        <div className="app-content">
            { props.children }
        </div>
    </div>
);

export { Layout };
