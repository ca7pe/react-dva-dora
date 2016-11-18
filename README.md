[TOC]

# react-dva-dora

基于dva、dora、antDesign、webpack搭建前后端分离的react组件化项目

## 实现目标
1. 组件化开发
  > - 模块化组织
  > - 单组件调试

2. 前后端分离
  > - 前端路由
  > - 代码分离
  > - 站点分离

3. 工程自动化
  > - 文件版本号
  > - 实时监听
  > - 多环境区分

## 最终输出
1. 脚手架
2. 文档
3. 工具

## 技术选型
##### 1. FrontEnd
  > - 增强：[dva](https://github.com/dvajs/dva)(react) + [dora(webpack)](http://ant-tool.github.io/atool-build.html) + [ES6(ES5)](http://es6.ruanyifeng.com/)
  > - 优化：[CSS Module](https://zhuanlan.zhihu.com/p/20495964?columnSlug=purerender) + [Mock.js](https://github.com/dora-js/dora-plugin-proxy)
  > - 美化：[antDesign](https://ant.design)
  > - 辅助：[redux Devtool](https://chrome.google.com/webstore/category/extensions) + [react DevTool](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) + [Living Style Guide](https://getstorybook.io/)

dva组成：

- views: [react](https://github.com/facebook/react)
- models: [redux](https://github.com/reactjs/redux), [react-redux](https://github.com/reactjs/react-redux), [redux-saga](https://github.com/yelouafi/redux-saga)
- router: [react-router](https://github.com/reactjs/react-router)
- http: [whatwg-fetch](https://github.com/github/fetch)

##### 2. BackEnd
  > - 后端架构：JAVA
  > - HTML直出：nodejs中间层 + express
  > - 跨域请求转发：nginx

##### 3. API规范和文档
  > - swagger

## 业界参考
1. [魔方组件库 - 滴滴出行](http://mofang.xiaojukeji.com/)
2. [AntDesign - 蚂蚁金服](https://ant.design)

## 技能提升
1. 提高动手能力，主要是编码和架构能力，坚持盲打编码
1. 思维模式提升
1. 前端团队技术管理
1. 养成获取一手知识的习惯（Github、StackOverflow）
1. 尝试新工具，并充分利用和熟练使用已有工具（Atom Markdown、Sublime插件）
1. 快速定位bug和调试
1. 了解框架原理和实现
1. Hack Everything
1. 提高理论分析能力
1. 博采众长，开阔眼界，能够预见。

## 疑问
1. 蒙代尔三角悖论?
  > - 高可维护
  > - 高开发效率
  > - 易上手
2. 如何实现Gridview表格操作，让无web前端开发经验同学也能够快速构建web管理后台。？<br>
3. 使用了React后是否改善？是否要做一个React版本和传统版本的后台？<br>
  > - 使用React后，社区支持不够完善，jquery社区完善多年，有丰富插件提供支持。
4. 是否是最优的选型？
  > - 先实践，执行过程中完善战略。[√]



## TodoList 
> *重要 Important* - *紧急 Urgent*

##### I.U
1. [x] 完成普通dataGrid
1. [√] 动态路由、路由去掉hash
1. [√] ajax请求转发问题：主域名一致、cookie、登录态
1. [√] 如何在启动时发请求
1. [√] 菜单和面包屑联动

##### I.nU
1. [x] 自有命令行生成新页面套装（路由、菜单、dataGrid）
1. [x] webpack普通配置
1. [x] webpack文件引用加版本号
1. [x] 调试服务器文件发布在哪里？
1. [x] build之后的dist目录如何在生产环境配置？
1. [x] 测试用例

##### nI.U
1. [x] 无

##### nI.nU
1. [x] 无


## 待研究
1. [chrome://net-internals](https://segmentfault.com/q/1010000000364871)
1. [MVC，MVP 和 MVVM 的图示 - 阮一峰的网络日志 ](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
1. React Router 使用教程 - 阮一峰的网络日志
http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
1. Popping Out of Hidden Overflow | CSS-Tricks
https://css-tricks.com/popping-hidden-overflow/

## 问题记录
1. 只能有一个根节点
1. &lt;!-- react-empty: 1 --&gt;  -> 去除queryKey时导致
1. Unknown option: direct.presets -> bable.core版本过低
1. :global -> less
1. two children with the same key -> 双引号
1. fetch默认不带cookie、ip+端口号转发 -> {credentials: 'include'}
1. iterator key不能重复

##### 相关链接
- [Windows下使用Beyond Compare作为git的比对与合并工具 - Tek_Eternal - 开源中国社区](https://my.oschina.net/u/1010578/blog/348731)

- [如何将本地的项目加入git管理？ - SegmentFault](https://segmentfault.com/q/1010000004681987)

- [Unknown option: direct.presets · Issue #13 · storybooks/react-storybook](https://github.com/storybooks/react-storybook/issues/13)

- [javascript - React.js confuse with 'two children with the same key' - Stack Overflow](http://stackoverflow.com/questions/29382526/react-js-confuse-with-two-children-with-the-same-key)

## 社区提问

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)
2. [Segment Fault](https://segmentfault.com/t/antd)（中文）
3. [Gitter](https://gitter.im/ant-design/ant-design)

## 小知识

###### 1.git命令行

```bash
# 关联本地已有项目到远端
git init
git add .
git commit -m ""
git add remote origin ""
git push -u origin master

# 重新设置origin链接
git remote set-url origin ''

# 拉取仓库
git pull origin master

git reflog
git reset --hard xx

```

###### 2.npm命令行
```bash
# 显示npm包版本
npm ls <packageName>

# 设置全局目录
npm config

# npm install 显示安装进度 
npm config set loglevel=http
```

###### 3.sublime插件列表

1. Ctags
1. Sublime Terminal
1. Sublime-Better-Completion
1. Doc​Blockr
1. StatusBar File Size
1. OmniMarkupPreviewer
1. HTML-CSS-JS Prettify

[如何优雅地使用Sublime Text3 - 简书](http://www.jianshu.com/p/3cb5c6f2421c/)


###### 4.nginx配置
```bash
server {
  ...
  location / {
    try_files $uri /index.html;
  }
}
```
[路由的express、nginx配置 - react-router](https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md)


##### 5.正则表达式
http://deerchao.net/tutorials/regex/regex-1.htm
```
(?<name>.*)(?<url>http.*)
[$1]($2)

```

## 思考

1. 你想到的别人说不定早就想到了，而且已经实现了，问题是你找不找得到！
1. 真正学会 React 是一个漫长的过程。你会发现，它不是一个库，也不是一个框架，而是一个庞大的体系。想要发挥它的威力，整个技术栈都要配合它改造。你要学习一整套解决方案，从后端到前端，都是全新的做法。举例来说，React 不使用 HTML，而使用 JSX 。它打算抛弃 DOM，要求开发者不要使用任何 DOM 方法。它甚至还抛弃了 SQL ，自己发明了一套查询语言 GraphQL 。当然，这些你都可以不用，React 照样运行，但是就发挥不出它的最大威力。
这样说吧，你只要用了 React，就会发现合理的选择就是，采用它的整个技术栈。