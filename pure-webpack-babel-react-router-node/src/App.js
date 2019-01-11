import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//--------------
// loadable
//--------------
const Footer = Loadable({
  loader: () => import('./Footer'/* webpackChunkName:"Footer" */),
  loading: () => <div>Loading...</div>,
});
const Home = Loadable({
  loader: () => import('./Home'/* webpackChunkName:"Home" */),
  loading: () => <div>Loading...</div>,
});
const Hello = Loadable({
  loader: () => import('./Hello'/* webpackChunkName:"Hello" */),
  loading: () => <div>Loading...</div>,
});



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
                <Redirect to="/" />
              </Switch>
            </Router>
            <Footer />
        </div>
    )
}

//module.exports = App;
ReactDOM.render(<App/>, document.getElementById('root'))