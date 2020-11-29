import React, { Component } from 'react';
import GutHubContext from '../GutHubContext';
import Buddy from './Buddy/Buddy';
import config from '../config';
import './Buddies.css';


class Buddies extends Component {
    state = {
        buddies: []
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
                this.setState({
                    buddies: userinfo.buddies
                })
            })
            .catch(error => alert('Recipes could not be found. Please Try Again'));

    }


    render() {
        if (!this.state.buddies) {
            return (
                <div className='buddiespage'>
                    <h2>Buddies</h2>
                    <p>Press the button to add a buddy!</p>
                    <button className="float">
                        <span className="button-label my-float"><a className="buddy__add__button" href="/add/buddy">Add Buddy</a></span>
                    </button>
                </div>
            )
        } else {
            return (
                <div className='buddiespage'>
                    <h2>Buddies</h2>
                    <ul>
                        {this.state.buddies.map(buddy =>
                            <Buddy
                                id={buddy.id}
                                username={buddy.username}
                                received={buddy.received} />
                        )}
                    </ul>
                    <button className="float">
                        <span className="button-label my-float"><a className="buddy__add__button" href="/add/buddy">Add Buddy</a></span>
                    </button>
                </div>
            )
        }
    }
}

export default Buddies;