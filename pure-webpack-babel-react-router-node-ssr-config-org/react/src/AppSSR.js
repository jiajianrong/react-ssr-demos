import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { StaticRouter as Router } from 'react-router-dom';

import Routes from './Routes';


const App = (routeKey, staticContext) => {
    return (
        <div>
            <Router location={routeKey} context={staticContext}>
                <Routes />
            </Router>
        </div>
    )
}

module.exports = App