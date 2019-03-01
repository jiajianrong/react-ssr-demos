import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';



const Home = () => <div>Home | <a href="/hello">hello</a></div>;
const Hello = () => <div>Hello | <a href="/">home</a></div>;



export default () => {
    return (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hello" component={Hello} />
            <Redirect from="/hello2" to="/hello" />
          </Switch>
        </div>
    )
}

//module.exports = App;
//ReactDOM.render(<App/>, document.getElementById('root'))