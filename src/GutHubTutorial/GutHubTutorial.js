import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../GutHubContext';
import './GutHubTutorial.css'

class HomeScreen extends Component {
    static contextType = GutHubContext;

    render() {
        return (
            <div className='tutorial'>
                <h2>Welcome to GutHub!</h2>
                <p>GutHub is a simple recipe tracking and meal planning app.
                </p>
                <p>The goal is to allow you to keep tabs on your favorite recipes,
                with a very simple way to share them so you can stay on the
                same page with people you live or coordinate meals with.
                </p>
                <hr />
                <h3>Saved Recipes</h3>
                <p>You can view your saved recipes or search for new ones in the recipe menu.</p>
                <h3>CookLists</h3>
                <p>You can think of a CookList as a Cooking Playlist. It's a great way to keep track of your favorite holiday recipes, weekly recipes, recipes Grandma likes to make, and so on. A CookList for any occasion!</p>
                <h3>Buddies</h3>
                <p>The GutHub Buddy System is made to be as simple as possible. Simply press the share button on a recipe and send it to your buddy.</p>
                <hr />
                <p>Well, now that you've got an idea of what's going on, <Link to='/login'>log in</Link> or <Link to='/createaccount'>create an account</Link> if you haven't already, and bon appetit!</p>
            </div>
        )
    }
}

export default HomeScreen;


/*

To Do
Grocery Tab

<h3>Groceries</h3>
<p>The grocery tab is made to get a general idea of what you'll have to buy at the store next time. You can add a recipe's ingredients to the grocery list from the recipe page.</p>


*/