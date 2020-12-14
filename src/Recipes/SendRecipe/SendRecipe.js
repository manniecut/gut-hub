import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import { orderUsers } from '../../guthub-helpers';
import config from '../../config';
import './SendRecipe.css';

class SendRecipe extends Component {
    state = {
        buddylist: '',
        recipeId: this.props.match.params.recipeid,
        users: '',
        sendTo: '',
        partsReady: false
    }

    static contextType = GutHubContext;

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    componentDidMount() {
        const users = orderUsers(this.context.users)
        const userIndex = ((parseInt(this.context.user.userid)) - 1)
        const userInfo = users[userIndex]
        const buddiesDetails = this.getBuddiesDetails((userInfo.buddylist.split(',')), users)
        this.setState({
            users: users,
            buddylist: userInfo.buddylist.split(','),
            details: buddiesDetails,
            userIndex: userIndex,
            userInfo: userInfo,
            partsReady: true
        })
    }

    getBuddiesDetails = (buddylistArray, allUsers) => {
        let buddyListInfo = []
        buddylistArray.forEach(buddyid => {
            const arrayIndex = buddyid - 1
            if (parseInt(allUsers[arrayIndex].id) === parseInt(buddyid)) {
                buddyListInfo = [...buddyListInfo, (allUsers[arrayIndex])]
            }
        })
        return buddyListInfo
    }

    /** Submission */

    handleSubmit = e => {
        e.preventDefault();
        const newMessage = {
            sentobject: `/recipes/${this.state.recipeId}`,
            sender: this.context.user.userid
        }
        fetch(`${config.API_ENDPOINT}/messages`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(message => {
                //this.context.sendMessage(message) //adds message to state
                this.handleBuddyReceive(message)
            })
            .catch(error => { alert('Cant send recipe, please try again') })
    }

    handleBuddyReceive = message => {

        const updatedUser = this.context.users[((this.state.sendTo) - 1)]

        updatedUser.received = this.concatString(updatedUser.received, message.id)

        fetch(`${config.API_ENDPOINT}/users/${updatedUser.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })

            .then(message => {
                this.props.history.goBack()
            })
            .catch(error => { console.log(error) })

    }

    concatString = (received, newMessage) => {
        if (received === '') {
            return (received.concat(newMessage))
        }
        else if (received !== '') {
            return (received.concat(',' + newMessage))
        }
    }


    /** Form */

    handleCancel = () => {
        this.props.history.goBack()
    }

    handleRecipientUpdate = recipient => {
        this.setState({
            sendTo: recipient
        })
    }

    optionRender() {
        const buddies = this.state.details
        let content = []
        for (let i = 0; i < buddies.length; i++) {
            content.push(<option key={buddies[i].id} value={buddies[i].id}>{buddies[i].username}</option>)

        }
        return content
    }


    /** Render */

    render() {
        if (this.state.partsReady === true) {
            return (
                <form className='send__recipe__form' onSubmit={this.handleSubmit}>
                    <label htmlFor='recipetype'><h4>Send To:</h4></label>
                    <select
                        id='recipetype'
                        name='recipetype'
                        onChange={e => this.handleRecipientUpdate(e.target.value)}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled hidden>Choose here</option>
                        {this.optionRender()}
                    </select>


                    <button className='addrecipe__button' type='submit'>
                        Send
                    </button>
                    <button className='canceladdrecipe__button' type='button' onClick={this.handleCancel}>
                        Cancel
                    </button>
                </form>
            )
        } else if (this.state.partsReady === false) {
            return (
                <form className='send__recipe__form' onSubmit={this.handleSubmit}>
                    <label htmlFor='recipetype'><h4>Send To:</h4></label>


                    <button className='addrecipe__button' type='submit'>
                        Send
                    </button>
                    <button className='canceladdrecipe__button' type='button' onClick={this.handleCancel}>
                        Cancel
                    </button>
                </form>
            )
        }
    }
}



export default SendRecipe;