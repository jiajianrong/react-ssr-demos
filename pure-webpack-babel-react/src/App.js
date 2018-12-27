import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Home = () => <div>Home | <a href="#hello">hello</a></div>;
const Hello = () => <div>Hello | <a href="#">home</a></div>;

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello} />
      </Switch>
    </HashRouter>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))