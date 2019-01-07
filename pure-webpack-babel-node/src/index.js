//const {sum} = require('./utils')
import {sum} from './utils'
import http from 'http'


console.log(sum(1,2,3,4,5))


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n' + sum(1,2,3,4,5));
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');