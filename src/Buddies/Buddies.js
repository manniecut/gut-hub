import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../GutHubContext';
import Buddy from './Buddy/Buddy';
import config from '../config';
import './Buddies.css';
import MessageCenter from './MessageCenter/MessageCenter';


class Buddies extends Component {
    state = {
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
        const loggedInUser = 1;
        fetch(`${config.API_ENDPOINT}/users/${loggedInUser}/`)
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
                    <div className='buddylist__column'>
                        <MessageCenter />
                    </div>
                    <div className='buddylist__column'>
                        <ul className='buddylist__ul'>
                            <h2>Buddies</h2>
                            {this.state.buddies.map(buddy =>
                                <Buddy
                                    key={buddy}
                                    id={buddy} />
                            )}
                        </ul>
                        <button className="float">
                            <span className="button-label my-float"><Link to='/add/buddy/' className="buddy__add__button">Add Buddy</Link></span>
                        </button>
                    </div>
                </div>
            )
        }
    }
}

export default Buddies;