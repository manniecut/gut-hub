import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../GutHubContext';
import Buddy from './Buddy/Buddy';
import { orderUsers } from '../guthub-helpers'
import config from '../config';
import './Buddies.css';

// this component displays the user's list of buddies


class Buddies extends Component {
    state = {
        buddies: [],
        updatedBuddies: [],
        received: []
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = GutHubContext

    //gets user's stored buddy string and converts it to an array to put in state
    componentDidMount() {
        const userIndex = ((parseInt(this.context.user.userid)) - 1)
        const user = (orderUsers(this.context.users))[userIndex]
        this.setState({
            buddies: user.buddylist.split(',')
        })
    }

    // removes a buddy from user's buddy list
    handleClickDelete = id => {
        const currentBuddies = this.state.buddies
        const userIndex = ((parseInt(this.context.user.userid)) - 1)
        const user = (orderUsers(this.context.users))[userIndex]
        const filtered = (currentBuddies.filter(bud => bud !== id.toString()))
        const filteredString = filtered.toString()
        user.buddylist = filteredString
        fetch(`${config.API_ENDPOINT}/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (!res.ok)
                    return res
                        .then(e => Promise.reject(e))
                return res
            })
            .then(this.context.updateUser(user))
            .then(this.setState({
                buddies: filtered
            }))
            .catch(error => { console.log('error') })
    }


    render() {
        // eslint-disable-next-line
        if (this.state.buddies == "") {
            return (
                <div className='buddiespage'>
                    <h2>Buddies</h2>
                    <p>Press the button to add a buddy!</p>
                    <button className="float">
                        <span className="button-label my-float"><Link to='/add/buddy/' className="buddy__add__button">Add Buddy</Link></span>
                    </button>
                </div>
            )
        } else {
            return (
                <div className='buddiespage'>
                    <ul className='buddylist__ul'>
                        <h2>Buddies</h2>
                        {this.state.buddies.map(buddy =>
                            <Buddy
                                key={buddy}
                                id={buddy}
                                delete={this.handleClickDelete}
                            />
                        )}
                    </ul>
                    <button className="float">
                        <span className="button-label my-float"><Link to='/add/buddy/' className="buddy__add__button">Add Buddy</Link></span>
                    </button>
                </div>
            )
        }
    }
}

export default Buddies;