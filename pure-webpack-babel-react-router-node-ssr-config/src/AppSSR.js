import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { StaticRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';


const Footer = Loadable({
    loader: () => import('./Footer'/* webpackChunkName:"Footer" */),
    loading: () => <div>Loading...</div>,
});


module.exports = (routeKey) => {
    return (<div><Router location={routeKey} context={{}}><AppRoutes /></Router><Footer /></div>)
}