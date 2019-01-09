import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AsyncBundle from './AsyncBundle';
import Hello from './Hello';
import Home  from './Home';



const HelloAsyncEnhance = () => import(
    './HelloAsync' /* webpackChunkName:"HelloAsync" */
)
const HelloAsync = (props) => (
    <AsyncBundle load={HelloAsyncEnhance}>
        {(Mod) => (<Mod {...props}/>)}
    </AsyncBundle>
)


const App = (routeKey) => {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hello" component={Hello} />
            <Route exact path="/helloasync" component={HelloAsync}/>
            <Redirect to="/" />
          </Switch>
        </Router>
    )
}

module.exports = App;
ReactDOM.render(<App/>, document.getElementById('root'))