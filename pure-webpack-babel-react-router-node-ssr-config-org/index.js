//import React from 'react';
//import ReactDOMServer from 'react-dom/server';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const http = require('http');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const staticServer = require('koa-static');
const Loadable = require('react-loadable');
const ssr = require('./mw-ssr');

const app = new Koa();


app.use( staticServer( path.join(__dirname, './react/build') ) );


app.use(ssr);


Loadable.preloadAll().then(() => {
    app.listen(1337, () => {
        console.log('Running on http://localhost:1337/');
    });
});


