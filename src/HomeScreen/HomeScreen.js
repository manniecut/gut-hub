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
                    <p>Click a tab above to get started</p>
                    <hr />
                    <h4>Search and MyRecipes</h4>
                    <p>You can search for view saved recipes in these respective tabs.</p>
                    <h4>Messages</h4>
                    <p>Here you can see the messages that have received from buddies.</p>
                    <h4>Buddies</h4>
                    <p>Here you can view your current buddies and add new ones. The GutHub Buddy System is made to be as simple as possible. Simply press the share button on a recipe and send it to your buddy.</p>
                    <h5>Bon Appétit!</h5>
                    <button className="float" onClick={this.context.logout}>
                        <span className="button-label my-float">Log Out</span></button>
                </div>
            </div>
        )
    }
}

export default HomeScreen;