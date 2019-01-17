import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { StaticRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';


module.exports = (routeKey, staticContext) => {
    return (
        <div>
            <Router location={routeKey} context={staticContext}>
                <AppRoutes />
            </Router>
        </div>
    )
}