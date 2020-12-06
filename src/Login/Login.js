import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { orderUsers } from '../guthub-helpers';
import GutHubContext from '../GutHubContext';
import './Login.css'

class Login extends Component {

    state = {
        username: '',
        password: '',
        userId: ''
    }

    static contextType = GutHubContext;

    handleSubmit = e => {
        e.preventDefault();
        const { username, password, userId } = this.state
        const users = orderUsers(this.context.users)
        users.forEach(user => {
            if (user.username === username && user.pass === password) {
                this.context.setUser(username, userId)
                return
            }
        })
    }


    /** Form to State Functions */

    handleSetUser = username => {
        const users = orderUsers(this.context.users)
        users.forEach(user => {
            if (user.username === username) {
                this.setState({
                    userId: user.id,
                    username: user.username
                })
                return
            }
        })
    }



    handleSetPass = pass => {
        this.setState({
            password: pass
        })
    }



    render() {
        return (
            <>
                <form className='LoginPage' onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='username'><h4>Username:</h4></label>
                        <input
                            type='username'
                            name='username'
                            id='username'
                            onChange={e => this.handleSetUser(e.target.value)}
                            required
                        />
                        <label htmlFor='password'><h4>Password:</h4></label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            onChange={e => this.handleSetPass(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type='submit' className='login__button'>
                            Login
                </button>
                    </div>
                    <p>This is a test version, you can sign in with: "Guest", "guest".</p>
                    <p>Or <Link to='/createaccount'>Create an Account</Link></p>
                </form>
            </>
        )
    }
}

export default Login;