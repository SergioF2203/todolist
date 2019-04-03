import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {

    render() {
        return (
            <div className='add-item'>
                {/*<input type='text'/>*/}
                <button className='btn btn-outline-secondary'
                onClick={()=>console.log('i want to add item!!')}>
                    Add Item
                </button>
            </div>
        )
    }
};