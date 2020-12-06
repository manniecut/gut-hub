import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../GutHubContext';
import Buddy from './Buddy/Buddy';
import { orderUsers } from '../guthub-helpers'
import config from '../config';
import './Buddies.css';


class Buddies extends Component {
    state = {
        loggedInUser: this.context.user.userid,
        users: [],
        buddies: [],
        received: []
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = GutHubContext

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/users/${this.state.loggedInUser}/`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();

            })
            .then(userinfo => {
                const { buddylist, received } = userinfo;
                if (buddylist) {
                    this.setState({
                        buddies: buddylist.split(','),
                        received: received.split(',')
                    })
                }
            })
            .catch(error => alert('Buddies could not be found. Please Try Again'));
    }

    componentDidUpdate() {
        fetch(`${config.API_ENDPOINT}/users/${this.state.loggedInUser}/`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(userinfo => {
                const { buddylist, received } = userinfo;
                if (buddylist) {
                    this.setState({
                        buddies: buddylist.split(','),
                        received: received.split(',')
                    })
                }
            })
            .catch(error => alert('Buddies could not be found. Please Try Again'));
    }

    orderUsers = users => {
        users.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }

    handleClickDelete = id => {
        const currentlySaved = this.state.buddies
        console.log(currentlySaved)
        const userIndex = ((parseInt(this.state.loggedInUser)) - 1)
        const user = (orderUsers(this.context.users))[userIndex]
        const filteredString = (this.state.buddies.filter(bud => bud !== id.toString())).toString()
        user.buddylist = filteredString
        console.log(user)
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
            .catch(error => { console.log('error') })

    }


    render() {
        if (!this.state.buddies) {
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
                <div className='buddiespage buddylist__row'>
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