import React from 'react';

//让自己自定义的组件类继承React.Component类
export default class CommentList extends React.Component{
    render(){
        return (
            <ul className='list-group'>
                {
                    this.props.comments.map(function (item,index) {
                        return <li key={index} className='list-group-item'>
                            {item.name}:{item.content}
                            <span className='pull-right'>
                                {item.createAt.toLocaleString()}
                            </span>
                        </li>
                    })
                }
            </ul>
        )
    }
}