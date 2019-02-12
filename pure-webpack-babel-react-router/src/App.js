import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

import AsyncBundle from './AsyncBundle';
import Hello  from './Hello';
import Home   from './Home';


//--------------
// loadable bundle
//--------------
const FooterAsync = Loadable({
  loader: () => import('./Footer'/* webpackChunkName:"Footer" */),
  loading: () => <div>Loading...</div>,
});

// 使用loadable替换async bundle
const HelloAsync = Loadable({
  loader: () => import('./HelloAsync'/* webpackChunkName:"HelloAsync" */),
  loading: () => <div>Loading...</div>,
});


//--------------
// async bundle
//--------------
//const HelloAsyncEnhance = () => import(
//  './HelloAsync' /* webpackChunkName:"HelloAsync" */
//)
//const HelloAsync = (props) => (
//  <AsyncBundle load={HelloAsyncEnhance}>
//      {(Mod) => (<Mod {...props}/>)}
//  </AsyncBundle>
//)


//--------------
// main app
//--------------
const App = (routeKey) => {
    return (
        <div>
            <Router>
                <div>
                  <Link to="/aaaa" >not exist path</Link>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/hello" component={Hello} />
                    <Route exact path="/helloasync" component={HelloAsync}/>
                    <Redirect to="/" />
                  </Switch>
                </div>
            </Router>
            <FooterAsync/>
        </div>
    )
}

//module.exports = App;
ReactDOM.render(<App/>, document.getElementById('root'))