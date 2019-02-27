import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';



const App = (routeKey, context) => {
    return (
        <Router location={routeKey} context={context}>
          <AppRoutes />
        </Router>
    )
}



module.exports = App;