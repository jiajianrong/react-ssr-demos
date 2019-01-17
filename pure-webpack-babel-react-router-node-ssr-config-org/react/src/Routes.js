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

const Footer = Loadable({
    loader: () => import('./Footer'/* webpackChunkName:"Footer" */),
    loading: () => <div>Loading...</div>,
//  modules: ['./Footer'],
//  webpack: () => [require.resolveWeak('./Footer')],
});

//--------------
// module.exports = App;
//--------------
export default () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hello" component={Hello} />
            <Redirect to="/" />
        </Switch>
        <Footer />
    </div>
)

