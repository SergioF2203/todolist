import React, {Component} from 'react';

import './add-item.css';

export default class AddItem extends Component {

    state = {
        label: ''
    };


    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
       this.props.addNewItem(this.state.label);
    };

    render() {
        return (
            <form className='add-item d-flex'
                  onSubmit={this.onSubmit}>
                <input
                    type='text'
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder='what needs to be done'
                />
                <button
                    className='btn btn-outline-secondary'
                    // onClick={() => this.props.addNewItem('new item ...')}
                >
                    ...
                </button>
            </form>
        )
    }
};