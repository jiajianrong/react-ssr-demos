## 开发环境使用步骤

- `npm run start`
    
    
        使用`babel-watch`执行`server.js`
        使用`development`环境变量



## 发布生产环境步骤

- `node config/build.js` 或 `npm run build`

        把App.js编译为App.es5.js
    

- `npm run startInBuildMode`
    
        使用`babel-node`执行`server.js`
   

## 说明

- 使用Loadable
- 仅涉及直出，直出后页面未加载任何js文件