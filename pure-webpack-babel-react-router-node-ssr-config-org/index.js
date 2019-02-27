const path = require('path');
const Koa = require('koa');
const staticServer = require('koa-static');
const Loadable = require('react-loadable');
let env = process.env.NODE_ENV;

//-------------------------
// 开发环境时，使用 mw-ssr.js
// 线上环境时，使用mw-ssr.js编译后的mw-ssr-es5.js
//-------------------------
const ssr = env==='developmentssr' ? require('./mw-ssr') : require('./mw-ssr-es5');

const app = new Koa();
app.use( staticServer( path.join(__dirname, './react/build') ) );
app.use(ssr);


Loadable.preloadAll().then(() => {
    app.listen(1337, () => {
        console.log('Running on http://localhost:1337/');
    });
});

