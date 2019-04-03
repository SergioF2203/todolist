import React, {Component} from 'react';
import './list-item.css';

export default class ToDoListItem extends Component {
    // constructor(){
    //     super();
    //     this.onClickElement = () =>{
    //         console.log(`Done: ${this.props.label}`);
    //     };
    // };

    state = {
        done: false,
        important: false
    };

    onClickElement = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        });
    };

    changeStatusElement = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        });
    };

    render() {
        const {label} = this.props;

        const {done} = this.state;
        const {important} = this.state;

        let styleName = 'list-item';

        if (done) {
            styleName += ' done';
        }
        if (important) {
            styleName += ' important';
        }


        return (
            <span className={styleName}>
          <span
              className='list-item-label'
              onClick={this.onClickElement}>
              {label}
              </span>

            <button type='button'
                    className='btn btn-outline-success btn-sm float-right'
                    onClick={this.changeStatusElement}>
                <i className='fa fa-exclamation'/>
            </button>
            <button type='button'
                    className='btn btn-outline-danger btn-sm float-right'
                    onClick={this.props.onDeleted}>
                <i className='fa fa-trash-o'/>
            </button>
        </span>
        )
    }
}


