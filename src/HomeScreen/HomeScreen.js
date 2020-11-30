import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../GutHubContext';
import './HomeScreen.css'

class HomeScreen extends Component {
    static contextType = GutHubContext;

    render() {
        return (
            <div className='homescreen'>
                <div>
                    <h3>Welcome, {this.context.user.username}!</h3>
                    <p>You have 4 saved recipes and 2 lists.</p>
                </div>
                <div>
                    <p><Link to='/tutorial'>Click here for a quick rundown on using GutHub</Link></p>
                    <button className="float" onClick={this.context.logout}>
                        <span className="button-label my-float">Log Out</span></button>
                </div>
            </div>
        )
    }
}

export default HomeScreen;