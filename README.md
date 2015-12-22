# 快速开始 Vue 项目 v1.1.1

> 包含了路由(VueRouter)和数据请求(VueResource)的基本功能

## 使用

1. 克隆项目到当前目录下，注释 `.gitignore`

  ``` bash
  $ git clone git@github.com:114000/vue-project-start.git

  $ cd vue-project-start
  ```

  ``` bash
  # node_modules
  # dist
  .DS_Store
  ```

2. 安装依赖

  ``` bash
  vue-project-start$ npm install
  ```

3. 使用
  * 11400端口启动服务器监听文件变化，实时刷新

    ``` bash
    vue-project-start$ npm start
    ```


  * 或者打包正式文件，并切换 index.html 里面的 `<script>`

    ``` bash
    vue-project-start$ npm run bundle
    ```

    ``` html
    <!-- index.html  -->

    <head>
    ...
    <!-- <link rel="stylesheet" href="assets/main.css"> -->
    <link rel="stylesheet" href="dist/main.css">
    </head>
    <body>
    <app />

    <!-- <script src="assets/common.js"></script>  -->
    <!-- <script src="assets/bundle.js"></script>  -->

    <script src="dist/common.js"></script>
    <script src="dist/bundle.js"></script>
    <body>
    ...
    ```


## v1.1.1

目录结构

  ``` bash

  vue-project-start
    |- src/                       # 源文件目录
        |- Common/                #  |- 通用文件目录/
            |- Quest.js           #     |- 简单封装 jsonp 请求
            |- Mixins.js          #     |- vue 的混合（空）
            |- Reset.css          #     |- 清除默认样式
            ...
        |- Routes/                #  |- 路由目录/
            |- Router.js          #     |- 路由设置
            |- Lv1.Ad.vue         
            |- Lv1.Movie.vue
            ...
        |- Components/            #  |- 组件目录/
            |- MovieCard.vue
            |- Navigator.vue
            ...
        |- App.vue                #  |- app 根文件
        |- index.js               #  |- webpack 启动文件
        ...
    |- node_modules/              #  |- 项目依赖模块目录
    |- dist/                      #  |- webpack 打包文件目录（npm run build）
    |- index.html                 
    |- package.json               #  |- 项目描述
    |- README.md
    |- webpack.config.js          #  |- webpack 配置文件
    |- .gitignore                 
    ...
  ```


**参考**:

1. [Webpack傻瓜式指南（一）by 张轩](http://zhuanlan.zhihu.com/FrontendMagazine/20367175)
2. [Webpack 入门指迷 by 题叶](http://segmentfault.com/a/1190000002551952)
3. [vueJS 官网](http://cn.vuejs.org/)
4. [vue-router 文档](http://router.vuejs.org/zh-cn/index.html)
5. [vue-resource - github](https://github.com/vuejs/vue-resource)
