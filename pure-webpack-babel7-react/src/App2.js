import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Home = () => <div>Home | <Link to="/hello">hello</Link></div>;
const Hello = () => <div>Hello | <Link to="/">home</Link></div>;

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hello" component={Hello} />
      </Switch>
    </BrowserRouter>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))