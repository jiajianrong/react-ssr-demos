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
    
    // TODO:
    // copy REACT_PROJECT/build/index.html to NODE_PROJECT/static
    // upload REACT_PROJECT/build/static to CDN
}



