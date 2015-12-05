# 快速开始 Vue 项目

> 包含了路由(VueRouter)和数据请求(VueResource)的基本功能

### 使用

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

    <!-- <script src="assets/bundle.js"></script> -->
    <script src="dist/bundle.js"></script>
    ```


**参考**:

1. [Webpack傻瓜式指南（一）by 张轩](http://zhuanlan.zhihu.com/FrontendMagazine/20367175)
2. [Webpack 入门指迷 by 题叶](http://segmentfault.com/a/1190000002551952)
3. [vueJS 官网](http://cn.vuejs.org/)
4. [vue-router 文档](http://router.vuejs.org/zh-cn/index.html)
5. [vue-resource - github](https://github.com/vuejs/vue-resource)
