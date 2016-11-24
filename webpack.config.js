//导出一个配置对象
//
var HtmlWebpackPlugin=require('html-webpack-plugin');
var OpenBrowserWebpackPlugin=require('open-browser-webpack-plugin');
module.exports={
    entry:'./app/index.js',//入口文件
    output:{
        path:'./build',//打包后的目录名
        filename:'bundle.js'//指定打包后的文件名
    },
    //配置webpack-dev-server,实时刷新页面
    devServer:{
        inline:true,
        port:8080,//指定端口号
        contentBase:'./build'//指定静态文件根目录
    },
    //设置模块加载器
    module:{
        //对不同类型的文件如何加载,要有一个转换工具
        loaders:[
            {
                //配置文件匹配的文件后缀名
                test:/\.js$/,
                //设置加载器
                loader:'babel'
            },
            {
                test:/\.css$/,
                loader:'style!css'
            },
            {
                test:/\.(png|jpg|bmp|gif|eot|svg|ttf|woff|woff2)$/,
                //limit设置大小,大于4k不打包到build.js里面
                loader:'url?limit=4096'
            }
        ]
    },
    plugins:[
        //根据模板自动生成build目录下的html页面
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        }),
        //当打包完成后会自动打开默认浏览器并访问url配置的地址
        new OpenBrowserWebpackPlugin({
            url:'http://localhost:8080'
        })
    ]
};