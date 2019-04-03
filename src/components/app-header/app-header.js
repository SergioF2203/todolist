import React, {Component} from 'react';
import './app-header.css';

export default class AppHeader extends Component{
    render(){
        const{todo, done} = this.props;
        return (

            <div className='app-header d-flex'>
                <h1>ToDo List</h1>
                <h2>{todo} to do more, {done}</h2>
            </div>
        )

    }
};
