import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import Message from './Message/Message';
import config from '../../config';
import './MessageCenter.css'

class MessageCenter extends Component {
    state = {
        messages: [],
        allMessages: []
    }
    static defaultProps = {
        onDeleteMessage: () => { }
    }

    static contextType = GutHubContext;

    getMessagesForUser = (allMessages) => {
        const loggedInUser = this.context.user.userid
        const recMessages = this.context.users[loggedInUser - 1].received.split(',')
        const userMessages = []
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
            .catch(error => alert('Messages could not be found. Please Try Again'));

    }


    handleClickDelete = e => {

    }

    render() {
        const receivedMessages = this.state.messages
        return (
            <ol className='buddiespage buddylist__ol'><h2>Message Center</h2>
                {receivedMessages.map(message =>
                    <Message
                        key={message.id}
                        id={message.id}
                        sentobject={message.sentobject}
                        timesent={message.timesent}
                        sender={message.sender}
                    />
                )}
            </ol>
        )
    }
}

export default MessageCenter;