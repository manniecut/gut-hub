import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import Message from './Message/Message';
import { orderUsers } from '../../guthub-helpers';
import config from '../../config';
import './MessageCenter.css'

class MessageCenter extends Component {
    state = {
        messages: [],
        allMessages: [],
        messageString: ''
    }
    static defaultProps = {
        onDeleteMessage: () => { }
    }

    static contextType = GutHubContext;

    getMessagesForUser = (allMessages) => {
        const loggedInUser = this.context.user.userid
        const recMessages = (orderUsers(this.context.users))[loggedInUser - 1].received.split(',')
        const userMessages = []
        console.log(loggedInUser, recMessages)
        recMessages.forEach(recMsg => {
            allMessages.forEach(message => {
                if (message.id === parseInt(recMsg)) {
                    userMessages.push(message)
                }
            })
        })
        return userMessages;
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/messages/`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(messages => {
                const userMessages = this.getMessagesForUser(messages)
                this.setState({
                    messages: userMessages
                })
            })
            .catch(error => console.log('Messages could not be found. Please Try Again'));
    }


    handleClickDelete = id => {
        console.log('delete' + id)
        fetch(`${config.API_ENDPOINT}/messages/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (!res.ok)
                    return res
                        .then(e => Promise.reject(e))
                return res
            })
            .then(this.handleUpdateUserMsgs(id))
            .catch(error => { console.log({ error }) })

    }

    handleUpdateUserMsgs = id => {
        const users = orderUsers(this.context.users)
        console.log(users)
        const userIndex = ((parseInt(this.context.user.userid)) - 1)
        console.log(userIndex)
        const userInfo = users[userIndex]
        const recMessages = userInfo.received.split(',')
        const filteredString = (recMessages.filter(num => num !== id.toString())).toString()
        console.log(filteredString)
        userInfo.received = filteredString
        console.log(userInfo)
        fetch(`${config.API_ENDPOINT}/users/${userInfo.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(this.context.updateUser(userInfo))
            .then(() => {
                const userMessages = this.getMessagesForUser(this.state.messages)
                this.setState({
                    messages: userMessages
                })
            })
            .catch(error => { console.log({ error }) })
    }

    render() {
        const receivedMessages = this.state.messages
        if (receivedMessages == '') {
            return (
                <div className='buddiespage'><h2>Messages</h2><p>No messages.</p></div>
            )
        } else {
            return (
                <ol className='buddiespage buddylist__ol'><h2>Messages</h2>
                    {receivedMessages.map(message =>
                        <Message
                            key={message.id}
                            id={message.id}
                            sentobject={message.sentobject}
                            timesent={message.timesent}
                            sender={message.sender}
                            delete={this.handleClickDelete}
                        />
                    )}
                </ol>
            )
        }
    }
}

export default MessageCenter;