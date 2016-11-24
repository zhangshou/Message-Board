import React from 'react';

//让自己自定义的组件类继承React.Component类
export default class CommentList extends React.Component{
    render(){
        return (
            <ul className='list-group'>
                <li className='list-group-item'>
                    张三:今天天气真不错  2016年11月24日15:09:30
                </li>
                <li className='list-group-item'>
                    李四:今天天气真不错  2016年11月24日15:09:30
                </li>
            </ul>
        )
    }
}