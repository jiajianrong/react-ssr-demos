## 开发环境使用步骤

- cd ./react
- npm run buildssr - react项目里以AppBSR.js为入口文件build src目录，
                                                    同时生成react-loadable.json
- cd ./
- npm run startssr



## 发布生产环境步骤

- cd ./react
- npm run buildssr - react项目里以AppBSR.js为入口文件build src目录，
                                                    同时生成react-loadable.json
- cd ./
- npm run buildssr - 以mw-ssr.js为入口文件，生成mw-ssr-es5.js供index.js使用
- node index.js    - 正常启动koaServer


## 说明

- 当前目录为koa开发目录，其中./react目录里放置react代码
- mw-ssr.js为中间件，使用./react/build/目录下的react-loadable.json
- koa-static中间件的目录地址为./react/build (真实生产环境应该使用CDN)




