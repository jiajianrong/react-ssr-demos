import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';



const Home = () => <div>Home | <a href="/hello">hello</a></div>;



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
    
    
    clientExpectsServerData() {
        return true
    }
    
    
    componentDidMount() {
        /* 某些情况下需要浏览器端发请求
         * 1
         * Server在SSR时，没有为本组件直出数据
         * 例如某个直出页包含了本组件在内的多个组件，其中一些为广告位组件，实时性要求不高
         * 2
         * 本组件未被直出，而是由其他组件动态加载
         * 例如用户点击按钮后加载本组件，由浏览器端直接向CDN获取JS，因此未走SSR流程
         */
        if (clientExpectsServerData() && !window.__SSR_DATA__) {
            //let username = await fetchDataFromSrv();
            //this.setState({username});
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