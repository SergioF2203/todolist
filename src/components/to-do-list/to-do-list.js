import React from 'react';
import './to-do-list.css';

import ToDoListItem from '../list-item';
import './to-do-list.css';

const ToDoList = ({items}) => {


    const elements = items.map((item)=>{

        const {id, ...otherProps} = item;

        return(
            <li key = {id} className="list-group-item">
                <ToDoListItem
                    {... otherProps}
                onDeleted={()=>console.log('Deleted')}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;