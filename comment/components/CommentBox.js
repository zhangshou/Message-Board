import React from 'react';

//让自己自定义的组件类继承React.Component类
export default class CommentBox extends React.Component{
    render(){
        return (
            <div className='panel panel-success'>
                <div className='panel-heading'>
                    <h3 className='text-center'>留言板</h3>
                </div>
                <div className='panel-body'>

                </div>
                <div className='panel-footer'>

                </div>
            </div>
        )
    }
}