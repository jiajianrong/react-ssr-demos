const path = require('path');
const fs = require('fs-extra');

let fr = path.join( __dirname, 'src/' );
let to = path.join( __dirname, 'dist/' );

let indexjs = path.join( __dirname, 'src/index.js' );


fs.copySync(fr, to, {
    //dereference: true,
    filter: file => {
        return file !== indexjs;
    },
});