import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import { orderUsers } from '../../guthub-helpers';
import config from '../../config';
import './AddBuddy.css';

class AddBuddy extends Component {

    // this component creates a single text field form for adding buddies

    static contextType = GutHubContext;

    state = {
        buddyQuery: '',
        userId: this.context.user.userid,
    }

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    handleCancel = () => {
        this.props.history.goBack();
    };

    // the following function adds the new buddy to the buddy list storage string
    concatString = (buddylist, id) => {
        if (buddylist === '') {
            return (buddylist.concat(id))
        }
        else if (buddylist !== '') {
            return (buddylist.concat(',' + id))
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const name = this.state.buddyQuery // buddy to be added
        const users = orderUsers(this.context.users) // all users in numerical order by ID
        const userIndex = ((parseInt(this.state.userId)) - 1) // getting the index for the current user
        const userInfo = (orderUsers(this.context.users))[userIndex] // getting the current user's information
        users.forEach(user => {
            // does some validation checks and then a fetch to store the new buddy list
            if ((this.state.userId === user.id) && !((userInfo.buddylist).includes(user.id)) && (user.username === name)) {
                alert("Can't add yourself!")
            } else if ((user.username === name) && ((userInfo.buddylist).includes(user.id))) {
                alert('User already on your buddylist')
            } else if ((user.username === name) && !((userInfo.buddylist).includes(user.id))) {
                const newBuddies = this.concatString(userInfo.buddylist, user.id)
                userInfo.buddylist = newBuddies
                fetch(`${config.API_ENDPOINT}/users/${this.state.userId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => {
                        if (!res.ok)
                            return res
                                .then(e => Promise.reject(e))
                        return res
                    })
                    .then(this.context.updateUser(user))
                    .then(this.props.history.push('/buddies'))
                    .catch(error => { console.log('error') })
            }
        })
    }

    // sets state with the buddy to be added
    handleBuddyQuery = name => {
        this.setState({
            buddyQuery: name
        })
    }


    render() {
        return (
            <form className='AddBuddyPage' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='username'><h4>Buddy's Username:</h4></label>
                    <input type='text' name='username' id='username' onChange={e => this.handleBuddyQuery(e.target.value)} required />
                </div>
                <div>
                    <button type='submit' className='addbuddy__button'>
                        Add
                         </button>
                    <button type='button' className='canceladd__button' onClick={this.handleCancel}>
                        Cancel
                        </button>
                </div>
            </form>
        )
    }
}


export default AddBuddy;