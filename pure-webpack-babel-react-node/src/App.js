import React from 'react';
import ReactDOM from 'react-dom';
import { StaticRouter, Route, Switch, Redirect } from 'react-router-dom';


const Home = () => <div>Home | <a href="/hello">hello</a></div>;
const Hello = () => <div>Hello | <a href="/">home</a></div>;


const App = (routeKey, context) => {
    return (
        <StaticRouter location={routeKey} context={context}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hello" component={Hello} />
            <Redirect from="/hello2" to="/hello" />
          </Switch>
        </StaticRouter>
    )
}

module.exports = App;
//ReactDOM.render(<App/>, document.getElementById('root'))