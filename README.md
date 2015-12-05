# 快速开始 Vue 项目

> 包含了路由(VueRouter)和数据请求(VueResource)的基本功能

### 使用

1. 克隆项目到当前目录下

``` bash
$ git clone git@github.com:114000/vue-project-start.git
```

2. 安装依赖

``` bash
$ cd vue-project-start

vue-project-start$ npm install
```

3. 
  * 8080端口启动服务器监听文件变化，实时刷新

    ``` bash
    vue-project-start$ npm start
    ```


  * 打包正式文件，并切换 index.html 里面的 `<script>`

    ``` bash
    vue-project-start$ npm run bundle
    ```

    ``` html
    <!-- index.html  -->

    <!-- <script src="assets/bundle.js"></script> -->
    <script src="dist/bundle.js"></script>
    ```


**参考**:

1. [Webpack傻瓜式指南（一）by 张轩](http://zhuanlan.zhihu.com/FrontendMagazine/20367175)
