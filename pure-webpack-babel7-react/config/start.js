process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';


process.on('unhandledRejection', err => {
    console.log(err)
    throw err;
});


const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');



const compiler = webpack(config)
const server = new WebpackDevServer(compiler, {
    contentBase: false,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    //public: '10.252.173.64',
//  proxy:[ { 
//      target: 'http://127.0.0.1:8002',
//      logLevel: 'silent',
//      context: [Function: context],
//      onProxyReq: [Function: onProxyReq],
//      onError: [Function],
//      secure: false,
//      changeOrigin: true,
//      ws: true,
//      xfwd: true 
//  } ]
})
server.listen(8888, '0.0.0.0', function() {
    console.log('webpack dev server is running')
});

