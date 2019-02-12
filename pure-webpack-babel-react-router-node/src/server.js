//import React from 'react';
//import ReactDOMServer from 'react-dom/server';
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const http = require('http');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const cheerio = require('cheerio');
const Loadable = require('react-loadable');
const ReactApp = 'development'===process.env.NODE_ENV ? 
    require('./App') : require('./App.es5');

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


app.use(async function (ctx, next) {
    
    // html模板
    let $ = cheerio.load(await readFile(HTML_TEMPLATE));
/*    
    // react string
    let reactStr = ReactDOMServer.renderToString(
        ReactApp(ctx.path)
    );
    
    // 拼装
    $(HTML_ROOT_DIV).html(reactStr);
    
    ctx.body = $.html();

    */
    
    
    let modules = [];

    let reactStr = ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            {ReactApp(ctx.path)}
        </Loadable.Capture>
    );

    console.log('modules loaded: ', modules);
    
    $(HTML_ROOT_DIV).html(reactStr);
    
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

