import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {
    clickButton = (id) => {
        console.log('click' + id);
    };

    render() {
        return (
            <div className='btn-group'>
                <button id='all'
                        type='button'
                        className='btn btn-info'
                        onClick={this.clickButton}>All
                </button>
                <button id='active'
                        type='button'
                        className='btn btn-outline-secondary'
                        onClick={this.clickButton}>Active
                </button>
                <button id='done'
                        type='button'
                        className='btn btn-outline-secondary'
                        onClick={this.clickButton}>Done
                </button>
            </div>
        );
    }
};

//btn-info btn-outline-secondary

