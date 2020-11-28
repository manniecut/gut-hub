import React, { Component } from 'react';

class CreateAccount extends Component {

    render() {
        return (
            <>
                <h2>Create Account</h2>
                <form className='recipe'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' id='username' placeholder=' ' required />
                    <label htmlFor='password'>Password:</label>
                    <input type='text' name='password' id='password' placeholder=' ' required />
                    <label htmlFor='password'>Password Again:</label>
                    <input type='text' name='password' id='password' placeholder=' ' required />
                    <label htmlFor='password'>Email:</label>
                    <input type='text' name='password' id='password' placeholder=' ' required />


                    <div className='login__buttons'>
                        <button type='button'>
                            Cancel
                </button>
                        <button type='submit'>
                            Login
                </button>
                    </div>
                </form>
            </>
        )
    }
}

export default CreateAccount;