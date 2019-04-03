import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {

    render() {
        return (
            <div className='add-item'>
                <button className='btn btn-outline-secondary'
                onClick={()=>this.props.addNewItem('new item ...')}>
                    Add Item
                </button>
            </div>
        )
    }
};