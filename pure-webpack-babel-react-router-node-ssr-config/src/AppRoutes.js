import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';

//--------------
// async route
//--------------
const Hello = Loadable({
  loader: () => import('./Hello'/* webpackChunkName:"Hello" */),
  loading: () => (<div>Loading...</div>),
});



//--------------
// module.exports = App;
//--------------
export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello} />
        <Redirect to="/" />
    </Switch>
)

