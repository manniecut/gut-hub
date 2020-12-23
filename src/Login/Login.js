import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { orderUsers } from '../guthub-helpers';
import GutHubContext from '../GutHubContext';
import md5 from 'md5';
import config from '../config';
import './Login.css';

class Login extends Component {

    state = {
        username: '',
        password: '',
        userId: ''
    }

    static contextType = GutHubContext;

    handleSubmit = e => {
        e.preventDefault();
        const loggingUser = {
            password: this.state.password,
            username: this.state.username
        }
        fetch(`${config.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(loggingUser)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(res => {
                console.log(res)
                this.context.setUser(res, this.state.userId)
            })
            .catch(error => { alert('Incorrect login, please try again.') })
    }

    
    /** Form to State Functions */

    // sets the user in the state and matches it's ID
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

    // sets encrypted pass in the state
    handleSetPass = pass => {
        this.setState({
            password: md5(pass)
        })
    }


    render() {
        return (
            <>
                <form className='LoginPage' onSubmit={this.handleSubmit}>
                    <h2>Welcome to GutHub!</h2>
                    <p>GutHub is a simple recipe tracking and meal planning app.
                </p>
                    <p>The goal is to allow you to keep tabs on your favorite recipes,
                    with a very simple way to share them so you can stay on the
                    same page with people you live or coordinate meals with.
                </p><br />
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