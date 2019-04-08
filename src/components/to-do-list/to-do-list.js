import React from 'react';
import './to-do-list.css';

import ToDoListItem from '../list-item';
import './to-do-list.css';

const ToDoList = ({
                      items, onDeleted,
                      onToggleImportant,
                      onToggleDone
                  }) => {
    const elements = items.map((item) => {

        const {id, ...otherProps} = item;

        return (
            <li key={id} className="list-group-item">
                <ToDoListItem
                    {...otherProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}/>
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