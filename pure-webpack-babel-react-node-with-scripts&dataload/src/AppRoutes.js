import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';



const Home = () => {
    return (
        <div>Home | <a href="/hello">hello</a></div>
    )
};



class Hello extends React.Component {
    constructor(props) {
        super(props)
        
        // 浏览器端使用
        if (typeof window!=="undefined") {
            if (window.__SSR_DATA__) {
                this.state = {username: window.__SSR_DATA__}
            } else {
                this.state = {username: 'default'}
            }
        
        // 服务器端使用
        } else {
            if (props.staticContext && props.staticContext.data) {
                this.state = {username: props.staticContext.data}
            } else {
                this.state = {username: 'default'}
            }
        }
    }
    
    
    render() {
        return (<div>Hello {this.state.username} | <a href="/">home</a></div>)
    }
}




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