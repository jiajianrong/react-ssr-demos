process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
process.on('unhandledRejection', err => {
    console.log(err)
    throw err;
});


const webpack = require('webpack');
const config = require('./webpack.config.build');


webpack(config).run(compileDone)


function compileDone(err, status) {
    if (err) throw new Error(err)
    console.log('bsr build done')
}



