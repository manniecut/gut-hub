import React, { Component } from 'react';
import './AddBuddy.css'

class AddBuddy extends Component {

    render() {
        return (
            <>
                <form className='AddBuddyPage'>
                    <div>
                        <label htmlFor='username'><h4>Buddy's Username:</h4></label>
                        <input type='text' name='username' id='username' required />

                    </div>
                    <div>
                        <button type='submit' className='addbuddy__button'>
                            Add
                </button>
                        <button type='button' className='addbuddy__button'>
                            Cancel
                </button>

                    </div>
                </form>
            </>
        )
    }
}

export default AddBuddy;