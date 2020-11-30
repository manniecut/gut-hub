import React, { Component } from 'react';
import GutHubContext from '../../../GutHubContext';
import { Link } from 'react-router-dom';
import config from '../../../config'
//import './Buddy.css'

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

    }

    componentDidMount = () => {
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
                console.log(buddy, sent)
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
                <li key={id} className='Buddy'>
                    <Link to={`/recipes/`}>
                        <h3 className='Buddy__username'>{this.state.buddyName}</h3>
                    </Link>
                    <button className='Buddy__delete' type='button'>Clear Messages</button>
                    <p>
                        Received: <Link to={this.props.sentobject}>{this.state.sent.title}</Link>
                    </p>

                </li>
            </>
        )
    }
}

export default Message;