import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import AsyncBundle from './AsyncBundle';
import Hello  from './Hello';
import Home   from './Home';


//--------------
// loadable
//--------------
const LoadableComponent = Loadable({
  loader: () => import('./Footer'/* webpackChunkName:"Footer" */),
  loading: () => <div>Loading...</div>,
});


//--------------
// asyncbundle
//--------------
const HelloAsyncEnhance = () => import(
    './HelloAsync' /* webpackChunkName:"HelloAsync" */
)
const HelloAsync = (props) => (
    <AsyncBundle load={HelloAsyncEnhance}>
        {(Mod) => (<Mod {...props}/>)}
    </AsyncBundle>
)


//--------------
// main app
//--------------
const App = (routeKey) => {
    return (
        <div>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/hello" component={Hello} />
                <Route exact path="/helloasync" component={HelloAsync}/>
                <Redirect to="/" />
              </Switch>
            </Router>
            <LoadableComponent/>
        </div>
    )
}

//module.exports = App;
ReactDOM.render(<App/>, document.getElementById('root'))