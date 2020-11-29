import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../GutHubContext';
import './Login.css'

class Login extends Component {
    static contextType = GutHubContext;

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
                        <button type='submit' className='login__button' onClick={this.context.login}>
                            Login
                </button>
                        <button type='button' className='login__button'>
                            Cancel
                </button>

                    </div>
                    <p>Or <Link to='/createaccount'>Create an Account</Link></p>
                </form>
            </>
        )
    }
}

export default Login;