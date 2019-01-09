'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';


process.on('unhandledRejection', err => {
    console.log(err)
    throw err;
});


const webpack = require('webpack');
const config = require('./webpack.config.prod');


webpack(config).run(compileDone)


function compileDone(err, status) {
    if (err) throw new Error(err)
    console.log('build done')
}



