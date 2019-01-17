import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

console.log('home component compiled')


module.exports = class extends React.Component {
    render() {
        console.log('home component rendered')
        return (<div>Home | <Link to="/hello">go</Link></div>)
    }
}
