import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

    render() {
        return (
            <>
                <form className='LoginPage'>
                    <div>
                        <label htmlFor='username'><h4>Username:</h4></label>
                        <input type='text' name='username' id='username' placeholder=' ' required />
                        <label htmlFor='password'><h4>Password:</h4></label>
                        <input type='text' name='password' id='password' placeholder=' ' required />
                    </div>
                    <div>
                        <button type='submit' className='login__button'>
                            Login
                </button>
                        <button type='button' className='login__button'>
                            Cancel
                </button>

                    </div>
                </form>
                <p>Or <a href='/createaccount'>Create an Account</a></p>
            </>
        )
    }
}

export default Login;