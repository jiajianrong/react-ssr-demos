import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const Home = () => (
    <div>Home | <Link to="/hello">hello</Link>
    </div>
)


module.exports = Home;