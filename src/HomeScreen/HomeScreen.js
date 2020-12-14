import React, { Component } from 'react';
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
                    <p>You can search for, view saved, and even create new recipes in these tabs. Each recipe has options to save, send, and delete. The send button is only visible if you have added buddies. The delete option is only available on your own recipes.</p>
                    <h4>Messages</h4>
                    <p>The GutHub sharing system is made to be as simple as possible. Here you can see the messages that you have received from buddies. Messages can be sent from the recipe page.</p>
                    <h4>Buddies</h4>
                    <p>Here you can view your current buddies and add new ones. Simply press the share button on a recipe and send it to your buddy.</p>
                    <h5>Bon Appétit!</h5>
                    <button className="float" onClick={this.context.logout}>
                        <span className="button-label my-float">Log Out</span></button>
                </div>
            </div>
        )
    }
}


export default HomeScreen;