import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import { Link } from 'react-router-dom';
import config from '../../config'
import './Message.css'

// this component is an individual message for the message list

class Message extends Component {
    state = {
        buddyName: [],
        sent: []
    }

    static defaultProps = {
        onDeleteMessage: () => { }
    }

    static contextType = GutHubContext;

    handleClickDelete = e => {
        this.props.delete(this.props.id)

    }

    componentDidMount = () => {
        // the component is populated with the information of the received message
        const buddyId = this.props.sender
        const sentobject = this.props.sentobject
        Promise.all([
            fetch(`${config.API_ENDPOINT}/users/${buddyId}`),
            fetch(`${config.API_ENDPOINT}${sentobject}`)
        ])
            .then(([buddyRes, objRes]) => {
                if (!buddyRes.ok)
                    return buddyRes.json().then(e => Promise.reject(e));
                if (!objRes.ok)
                    return objRes.json().then(e => Promise.reject(e));
                return Promise.all([buddyRes.json(), objRes.json()]);
            })
            .then(([buddy, sent]) => {
                this.setState({
                    buddyName: buddy.username,
                    sent: sent
                })
            })
            .catch(error => { alert('Message not found') })
    }

    render() {
        const { id } = this.props
        return (
            <>
                <li key={id} className='Message'>
                    <h3 className="Message__title"><Link to={this.props.sentobject}>{this.state.sent.title}</Link></h3>
                    <p className='message__from'>
                        From: {this.state.buddyName}
                    </p>
                    <button className='Message__delete' type='button' onClick={this.handleClickDelete}>Delete</button>


                </li>
            </>
        )
    }
}

export default Message;