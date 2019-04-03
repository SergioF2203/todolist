import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../to-do-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';


const App = () => {
    const todoData = [
        {label: 'Study React', id: 1},
        {label: 'Learn English', id: 2},
        {label: 'Drink Tea', id: 3}
    ];

    return (
        <div className='todo-app'>
            <AppHeader todo={1} done={3}/>
            <div className='top-panel d-flex'>
                < SearchPanel/>
                < ItemStatusFilter/>

            </div>
            < ToDoList
                items={todoData}
            />
        </div>
    );
};

export default App;