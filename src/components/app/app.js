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

    toggleProperty(array, id, property){
        const idx = array.findIndex((el) => el.id === id);

        const oldItem = array[idx];
        const newItem = {
            ...oldItem,
            [property]: !oldItem[property]
        };

        //2. construct new array
        const before = array.slice(0, idx);
        const after = array.slice(idx + 1);


        return  [
            ...before,
            newItem,
            ...after
        ];

    }

    onToggleImportant = (id) => {
        this.setState(({todoData})=>{
            return{
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {

        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
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

