import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../to-do-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';
import './app.css';


export default class App extends Component {

    maxID = 100;

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxID++
        }
    };

    state = {
        todoData: [
            this.createTodoItem('Study React'),
            this.createTodoItem('Learn English'),
            this.createTodoItem('Drink Tea')
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];

            return {
                todoData: newArray
            }
        })
    };


    addItem = (text) => {

        //generate id
        const newItem = this.createTodoItem(text);

        //add item in the array
        this.setState(({todoData}) => {
            const newArray = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArray
            }
        })
    };

    onToggleImportant = (id) => {
        console.log('Toggle important', id);
    };

    onToggleDone = (id) => {

        this.setState(({todoData}) => {

            //1. update object
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {
                ...oldItem,
                done: !oldItem.done
            };

            //2. construct new array
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [
                ...before,
                newItem,
                ...after
            ];

            return {
                todoData: newArray
            }

        });
    };

    render() {

        const doneCount = this.state.todoData
            .filter((el) => el.done === true).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className='todo-app'>
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className='top-panel d-flex'>
                    < SearchPanel/>
                    < ItemStatusFilter/>
                </div>
                < ToDoList
                    items={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem addNewItem={this.addItem}/>
            </div>
        )
    };

};

