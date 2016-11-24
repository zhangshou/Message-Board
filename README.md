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

## 命令的执行流程
1. 先配置package.json中的script
2. 执行`npm run build`,就相当于执行webpack命令
3. 执行webpack命令的时候会去当前目录的node_modules下面找这个可执行文件，并且执行此文件
4. 会找当前文件夹下的webpack.config.js配置文件，找到后把入口文件打包到目标路径的目标文件里去。
在打包的过程中，如果判断此文件需要加载器来进行加载的话会进行进行加载 。
5.最终会得到一个bundle.js文件，此文件是ES5的，可以在浏览器里直接运行，只需要让index.html文件引入此bundle.js就可以了

## webpack-dev-server
webpack会自动打包，打完后会自动打开浏览器预览项目。并且当源代码修改后还会马上重新打包，实时刷新页面
```
npm install webpack-dev-server --save
```
package.json添加脚本
```
 "scripts": {
     "build": "webpack",
     "dev":"webpack-dev-server"
  }
```
## 运行webpack-dev-server
```
 npm run dev
```

## html-webpack-plugin
用于读取模板，插入打包后的输出文件，然后保存到目标文件里去
```
npm install html-webpack-plugin --save

```
## open-browser-webpack-plugin
当打包完成后，自动打开浏览器
```
npm install open-browser-webpack-plugin --save
```

## 加载图片和css
```
npm install style-loader css-loader url-loader file-loa
der --save
```



