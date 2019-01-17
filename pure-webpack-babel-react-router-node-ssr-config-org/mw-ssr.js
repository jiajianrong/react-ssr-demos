const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const Loadable = require('react-loadable');
const { getBundles } = require('react-loadable/webpack');
const stats = require('./react/build/react-loadable.json');
const ReactApp = require('./react/src/AppSSR');


const HTML_TEMPLATE = path.join(__dirname, './react/public/index.html');
const HTML_ROOT_DIV = '#root';
const HTML_BODY = 'body';


async function createHtml( reactStr, scriptsStr ) {
    let $ = cheerio.load(await readFile(HTML_TEMPLATE));
    $(HTML_ROOT_DIV).html(reactStr);
    $(HTML_BODY).append(scriptsStr);
    
    return $.html();
}


function getScripts(bundles) {
    let scripts = bundles.map(
        bundle => `<script src="${bundle.file}"></script>`
    );
    
    scripts.push(`<script src="static/index.js"></script>`);
    scripts.unshift(`<script src="static/runtime.js"></script>`);
    
    return scripts;
}


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



module.exports = async function ssr(ctx, next) {
    
    let modules = [];
    let staticContext = {};

    let reactStr = ReactDOMServer.renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            {ReactApp(ctx.path, staticContext)}
        </Loadable.Capture>
    );
    
    if (staticContext.url) {
        ctx.status = 301;
        ctx.redirect(staticContext.url);
        return;
    }
    
    
    let bundles = getBundles(stats, modules);
    let scripts = getScripts(bundles);
    
    let htmlStr = await createHtml( reactStr, scripts.join('\n') );
    
    ctx.body = htmlStr;
}
