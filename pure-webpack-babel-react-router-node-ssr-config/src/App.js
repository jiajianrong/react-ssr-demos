import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';

const Footer = Loadable({
    loader: () => import('./Footer'/* webpackChunkName:"Footer" */),
    loading: () => <div>Loading...</div>,
});


const App = () => {
    return (<div><Router><AppRoutes /></Router><Footer /></div>)
}


Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('root'))
});
