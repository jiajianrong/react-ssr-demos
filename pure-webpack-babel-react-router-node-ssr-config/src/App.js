import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';


const App = () => {
    return (
        <div>
            <Router>
                <AppRoutes />
            </Router>
        </div>
    )
}


Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(<App />, document.getElementById('root'))
});
