import React from 'react';

//让自己自定义的组件类继承React.Component类
export default class CommentForm extends React.Component{
    render(){
        return (
            <form className='form-horizontal'>
                <div className="form-group">
                    <label className='control-label col-md-2' for="name">姓名</label>
                    <div className='col-md-10'>
                        <input type="text" className="form-control" id='name' name='name'/>
                    </div>
                </div>
                <div className="form-group">
                    <label className='control-label col-md-2' for="content">内容</label>
                    <div className='col-md-10'>
                        <textarea class="form-control" id='content' name="content" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className='col-md-10 col-md-offset-2'>
                        <button type='button' className="btn btn-primary">留言</button>
                    </div>
                </div>
            </form>
        )
    }
}