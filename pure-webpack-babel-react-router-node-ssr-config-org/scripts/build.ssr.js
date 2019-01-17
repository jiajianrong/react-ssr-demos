process.env.BABEL_ENV = 'productionssr';
process.env.NODE_ENV = 'productionssr';
process.on('unhandledRejection', err => {
    console.log(err)
    throw err;
});


const webpack = require('webpack');
const config = require('./webpack.config.prod.ssr');


webpack(config).run(compileDone)


function compileDone(err, status) {
    if (err) throw new Error(err)
    console.log('ssr prod done')
}



