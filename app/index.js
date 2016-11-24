//入口文件
import {name,age} from './comm.js';
//创建一个img元素
var img=document.createElement('img');
//引入bootstrap.css文件
require('bootstrap/dist/css/bootstrap.css');
//指定img元素的源路径
img.src=require('./img/messi6.jpg');
//指定类名
img.className='img-circle';
//把此元素添加到body中
document.body.appendChild(img);
