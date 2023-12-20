# 一、React Server Components基本概念

RSC是一种新型态的组件形式，可以专门在服务器上运行，并且可以执行数据可查询、文件读写等操作。与之相对应的就是React Client Components(RCC).

## 特性
1. 减少最终打包体积
2. 减少获取数据上的时间消耗
3. 渐进式渲染
https://github.com/facebook/react/blob/main/packages/react-client/src/ReactFlightClient.js

## 渲染方式

### 客户端渲染——Client Side Rendering

请求html => 加载js、css等资源 => 执行js并请求需要的数据 => 渲染出页面

组件存在于客户端，在处理交互或与服务端交互后请求数据后在客户端更新页面

![img_1.png](img_1.png)

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
    <script src="/static/js/bundle.js"></script>
  </body>
</html>
```
### 静态渲染SSG——Static Site Generation

构建的时直接把结果页面输出为html到磁盘并在服务器启动静态server，实现静态站点生成。

不需要动态生成、页面交互少，如博客、新闻等站点。

![img_2.png](img_2.png)

### 服务端渲染SSR——Server Side Rendering

组件被分为两部分，服务端可渲染生成静态页面的初次渲染组件、后续需要交互和逻辑的客户端组件

1. 每次访问时在服务器端将页面预渲染成一个包含初始状态的 HTML 返回给客户端
2. 客户端会请求页面并加载包含应用逻辑的JS
3. 水合（hydrated）打包好的JS中的逻辑如交互逻辑、更新页面状态进入客户端渲染阶段。

![img_3.png](img_3.png)

### React Server Components

