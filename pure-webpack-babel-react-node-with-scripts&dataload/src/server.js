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
const { getUsername } = require('./api');
const reactApp = 'development'===process.env.NODE_ENV ? 
    require('./AppSSR') : require('./AppSSR.es5');

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
    if (ctx.path.indexOf('favicon.ico') !== -1) {
        ctx.body = '';
        return;
    }
    await next();
});


app.use(async function (ctx, next) {
    if (ctx.path.indexOf('AppBSR.es5.js') !== -1) {
        const jsFile = path.join(__dirname, './AppBSR.es5.js');
        ctx.body = await readFile(jsFile);
        return;
    }
    await next();
});


app.use(async function (ctx, next) {
    
    // html模板
    let $ = cheerio.load(await readFile(HTML_TEMPLATE));
    
    // context
    let context = {};
    
    // load data
    if (ctx.path === '/hello') {
        context.data = await getUsername();
    }
    
    // react string
    let reactStr = ReactDOMServer.renderToString(
        reactApp(ctx.path, context)
    );
    
    // in case of 301
    if (context.url) {
        ctx.redirect(context.url);
        return;
    }
    
    let scripts = [
        `<script>window.__SSR_DATA__ = "${context.data}"</script>`,
        '<script src="AppBSR.es5.js"></script>',
    ]
    
    // 拼装
    // 加载浏览器端js - AppBSR
    $(HTML_ROOT_DIV).html(reactStr).after(scripts.join('\n'))
    
    ctx.body = $.html();
});


app.listen(1337)



/*http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');*/

