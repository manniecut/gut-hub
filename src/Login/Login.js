import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <>
                <form class='recipe'>
                    <div>
                        <label for='username'>Username:</label>
                        <input type='text' name='username' id='username' placeholder=' ' required />
                        <label htmlFor='password'>Password:</label>
                        <input type='text' name='password' id='password' placeholder=' ' required />
                    </div>
                    <div className='login__buttons'>
                        <button type='button'>
                            Cancel
                </button>
                        <button type='submit'>
                            Login
                </button>
                    </div>
                </form>
                <p>Or <a href='/createaccount'>Create an Account</a></p>
            </>
        )
    }
}

export default Login;