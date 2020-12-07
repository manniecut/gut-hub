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
        console.log('sending')
        const newMessage = {
            sentObject: `/recipes/${this.state.recipeId}`,
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

        updatedUser.received = (updatedUser.received).concat(message.id)

        console.log(updatedUser)

        // fetch(`${config.API_ENDPOINT}/users/${updatedUser.id}`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(updatedUser)
        // })
        //     .then(res => {
        //         if (!res.ok) {
        //             return res.json().then(error => {
        //                 throw error
        //             })
        //         }
        //         return res.json()
        //     })
        //     .then(message => {
        //         this.context.updateUser(message)
        //         this.props.history.goBack()
        //     })
        //     .catch(error => { alert('Cant send recipe, please try again') })

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

    optionRender = () => {
        const buddies = this.state.details
        return (
            <select
                id='sendTo'
                name='sendTo'
                onChange={e => this.handleRecipientUpdate(e.target.value)}
                defaultValue=""
                required
            >
                <option value="" disabled hidden>Choose here</option>

                {buddies.forEach(buddy => {
                    console.log(buddy.id, buddy.username)
                    return (
                        <option value={buddy.id}>{buddy.username}

                        </option>
                    )
                })}

            </select>
        )

    }





    /** Render */

    render() {

        if (this.state.partsReady === true) {

            return (
                <form className='send__recipe__form' onSubmit={this.handleSubmit}>
                    <label htmlFor='sendTo'><h4>Send To:</h4></label>
                    {this.optionRender()}
                    <button className='addrecipe__button' type='submit'>
                        Send
                    </button>
                    <button className='addrecipe__button' type='button' onClick={this.handleCancel}>
                        Cancel
                    </button>
                </form>
            )
        }
        else if (this.state.partsReady === false) {
            return (
                <form className='send__recipe__form' onSubmit={this.handleSubmit}>
                    <label htmlFor='sendTo'><h4>Send To:</h4></label>
                    <button className='addrecipe__button' type='submit'>
                        Send
                    </button>
                    <button className='addrecipe__button' type='button' onClick={this.handleCancel}>
                        Cancel
                    </button>
                </form>
            )


        }
    }
}



export default SendRecipe;