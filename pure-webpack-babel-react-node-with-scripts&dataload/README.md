## 开发环境使用步骤

详见package.json


## 说明

- 涉及直出，直出后页面加载bsr js文件
- 直出前Load Data并在`App`里使用`StaticRouter`的属性`context`传递给对应的`Route`
- 直出前Load Data并在`server`里将数据赋值给字符串`window.__SSR_DATA__`，再在浏览器端的组件里取出使用