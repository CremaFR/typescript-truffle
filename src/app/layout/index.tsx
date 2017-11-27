import * as React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Header }       from './Header';
import './layout.scss';


const Layout = ( props: any ) => (
    <div className="app-layout">
        <div className="app-content">
            <Header />
            { props.children }
        </div>
    </div>
);

export { Layout };
