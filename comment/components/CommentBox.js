import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

//让自己自定义的组件类继承React.Component类
export default class CommentBox extends React.Component{
    //构造函数,在es6中是在构造函数初始化私有属性数据的
    constructor(props){//props当前组件的属性对象
        super(props);//调用父类的构造函数
        //通过this.state初始化状态   等于es5中的getInitialState()
        this.state={comments:[
        {name:'张三',content:'今天天气好差',createAt:new Date()},
        {name:'李四',content:'全是雾霾',createAt:new Date()}
        ]}
    }
    render(){
        return (
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3 className='text-center'>留言板</h3>
                </div>
                <div className='panel-body'>
                    <CommentList comments={this.state.comments}></CommentList>
                </div>
                <div className='panel-footer'>
                    <CommentForm></CommentForm>
                </div>
            </div>
        )
    }
}