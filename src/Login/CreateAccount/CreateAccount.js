import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import { orderUsers } from '../../guthub-helpers';
import config from '../../config';

class CreateAccount extends Component {
    state = {
        username: '',
        pass: '',
        check: '',
        email: ''
    }

    static contextType = GutHubContext;

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
        const { username, pass, check, email } = this.state
        const users = orderUsers(this.context.users)
        if (check !== pass) {
            console.log('check passwords')
        } else {
            users.forEach(user => {
                if (user.username === username) {
                    alert('username exists')
                } else {
                    const newUser = {
                        username: username,
                        pass: pass,
                        email: email,
                    }
                    console.log(newUser)
                    fetch(`${config.API_ENDPOINT}/users`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => {
                            if (!res.ok) {
                                return res.json().then(error => {
                                    throw error
                                })
                            }
                            return res.json()
                        })
                        .then(user => {
                            console.log('user created')
                            this.context.addUser(user)
                            this.props.history.push(`/`)
                        })
                }
            })
        }
    }



    /** Form to State Updates */

    handleNameUpdate = name => {
        this.setState({
            username: name
        })
    }

    handlePassUpdate = pass => {
        this.setState({
            pass: pass
        })
    }

    handleCheckUpdate = check => {
        this.setState({
            check: check
        })
    }

    handleEmailUpdate = email => {
        this.setState({
            email: email
        })
    }



    render() {
        return (
            <>
                <h2>Create Account</h2>
                <form className='LoginPage' onSubmit={this.handleSubmit}>

                    <label htmlFor='username'>Username:</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        onChange={e => this.handleNameUpdate(e.target.value)}
                        required />

                    <label htmlFor='password'>Password:</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        onChange={e => this.handlePassUpdate(e.target.value)}
                        required />

                    <label htmlFor='password'>Password Again:</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        onChange={e => this.handleCheckUpdate(e.target.value)}
                        required />

                    <label htmlFor='password'>Email (optional, for latest updates):</label>
                    <input
                        type='text'
                        name='password'
                        id='password'
                        onChange={e => this.handleEmailUpdate(e.target.value)}
                        required />


                    <div >
                        <p>By signing up you agree that you've been made aware that this is currently in
                    testing phase and the password isn't super secure so please use a throwaway password.</p>
                        <button className='login__button' type='submit'>
                            Create
                         </button>
                        <button className='login__button' type='button' onClick={this.handleCancel}>
                            Cancel
                         </button>

                    </div>
                </form>
            </>
        )
    }
}

export default CreateAccount;