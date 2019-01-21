## 使用

- npm run start - 使用webpackdevserver正常开发react项目
- npm run build - 使用webpack以App为入口正常打包src到build目录
- npm run buildssr - 使用webpack以AppBSR为入口打包src到build目录，
                                                    同时生成react-loadable.json供server中间件使用


## 说明

- src/App.js - 存放原始react入口，以react项目为视角的前端开发人员仅关注该文件即可
- src/AppSSR.js - 为SSR时node加载JS的入口
- src/AppBSR.js - 为SSR时browser加载JS的入口

#### 三个文件的路由需保持一致