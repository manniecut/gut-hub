import React, { Component } from 'react';
import './AddBuddy.css'

class AddBuddy extends Component {

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    handleCancel = () => {
        this.props.history.goBack();
    };

    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <form className='AddBuddyPage' onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='username'><h4>Buddy's Username:</h4></label>
                        <input type='text' name='username' id='username' required />

                    </div>
                    <div>
                        <button type='submit' className='addbuddy__button'>
                            Add
                </button>
                        <button type='button' className='addbuddy__button' onClick={this.handleCancel}>
                            Cancel
                </button>

                    </div>
                </form>
            </>
        )
    }
}

export default AddBuddy;