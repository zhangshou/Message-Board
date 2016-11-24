import React from 'react';

//让自己自定义的组件类继承React.Component类
export default class CommentForm extends React.Component{
    render(){
        return (
            <form className='form-horizontal'>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="name">姓名</label>
                    <div className="col-md-11">
                        <input className="form-control" type="text" id="name" name="name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="content">内容</label>
                    <div className="col-md-11">
                        <textarea name="content" id="content" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-10 col-md-offset-1">
                        <button className="btn btn-primary" type="button">留言</button>
                    </div>
                </div>
            </form>
        )
    }
}