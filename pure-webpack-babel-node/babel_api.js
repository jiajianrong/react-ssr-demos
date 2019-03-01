const path = require('path');
const fs = require('fs-extra');
const babel = require('babel-core');
const nodemon = require('nodemon');
const cp = require('child_process');

const fr = path.join( __dirname, 'src/' );
const to = path.join( __dirname, 'dist/' );

const indexSrc = path.join( __dirname, 'src/index.js' );
const indexDes = path.join( __dirname, 'dist/index.js' );


babel.transformFile(indexSrc, {}, async function (err, result) {
    
    if (err) { 
        console.log(err);
        return;
    }
    
    await fs.ensureDir(to);
    
    fs.writeFile( indexDes, result.code, function() {
        console.log('file created: ' + indexDes);
        
        require('./copy');
        
        nodemon({ script: indexDes }).on('start', function () {
            console.log('nodemon started');
        }).on('crash', function () {
            console.log('script crashed for some reason');
        });
    })
});



