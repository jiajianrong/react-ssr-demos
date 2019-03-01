//import React from 'react';
//import ReactDOMServer from 'react-dom/server';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const http = require('http');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const staticServer = require('koa-static');
const cheerio = require('cheerio');
const Loadable = require('react-loadable');
const { getBundles } = require('react-loadable/webpack');
const stats = require('../build/react-loadable.json');

const ReactApp = require('./AppSSR');

const app = new Koa();
const HTML_TEMPLATE = path.join(__dirname, '../public/index.html');
const HTML_ROOT_DIV = '#root';


function readFile(filePath) {
    return new Promise( function(resolve, reject) {
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        });
    });
}


app.use( staticServer( path.join(__dirname, '../build') ) );


app.use(async function (ctx, next) {
    
    // html模板
    let $ = cheerio.load(await readFile(HTML_TEMPLATE));
    
    
    let modules = [];
    let staticContext = {};

    let reactStr = ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            {ReactApp(ctx.path, staticContext)}
        </Loadable.Capture>
    );
    
    if (staticContext.url) {
        ctx.status = 301;
        ctx.redirect(staticContext.url);
        return;
    }
    
    
    console.log('modules loaded: ', modules);
    
    
    let bundles = getBundles(stats, modules);
    
    let scripts = bundles.map( bundle =>
        `<script src="${bundle.file}"></script>` );
    
    scripts.push(`<script src="static/index.js"></script>`);
    //scripts.unshift(`<script src="static/vendor.js"></script>`);
    scripts.unshift(`<script src="static/runtime.js"></script>`);
    
    
    $(HTML_ROOT_DIV).html(reactStr);
    $('body').append(scripts.join('\n'));
    
    ctx.body = $.html();
});


Loadable.preloadAll().then(() => {
    app.listen(1337, () => {
        console.log('Running on http://localhost:1337/');
    });
});



/*http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');*/

