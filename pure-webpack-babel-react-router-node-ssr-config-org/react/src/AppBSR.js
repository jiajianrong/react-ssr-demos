import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';


const App = () => {
    return (
        <div>
            <Router>
                <Routes />
            </Router>
        </div>
    )
}


Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('root'))
});
