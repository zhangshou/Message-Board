## 如何打包es6模块
### 1. 初始化项目
```
npm init -y
```
运行后会生成一个package.json文件

### 2. 安装需要的模块
> 安装之前一定要检查当前目录有没有node_modules,如果有删除之后再在当前目录下安装
```
npm install webpack babel-core babel-loader babel-preset-es2015 --save
```
- webpack 就是打包的模块
- babel-core 是babel的核心模块
- babel-loader 是一个webpack加载器
- babel-preset-es2015 是一个预设，是把es6代码转成es5代码的转换函数的集合

### 3. 修改webpack.config.js脚本
```
"scripts": {
    "build": "webpack"
  }
```


