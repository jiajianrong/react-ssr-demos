import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './AppRoutes';



const App = () => {
    return (
        <Router>
          <AppRoutes />
        </Router>
    )
}



ReactDOM.hydrate(<App />, document.getElementById('root'))