import React, { Component } from 'react';
import './HomeScreen.css'

class HomeScreen extends Component {

    renderHomeScreen() {
        /* if logged in = true
            render homescreen
            else
            render please log in screen
            */
    }

    render() {
        return (
            <div className='homescreen'>
                <h3>Welcome to GutHub!</h3>
                <p>GutHub is a simple recipe tracking and meal planning app.
                </p>
                <p>The goal is to allow you to keep tabs on your favorite recipes,
                with a very simple way to share them so you can stay on the
                same page with people you live or coordinate meals with.
                </p>
                <p>You can view your saved recipes or search for new ones in the recipe menu.</p>
                <p>You can think of a CookList as a Cooking Playlist. It's a great way to keep track of your favorite holiday recipes, weekly recipes, recipes Grandma likes to make, and so on. A CookList for any occasion!</p>
                <p>The GutHub Buddy System is made to be as simple as possible. Simply press the share button on a recipe and send it to your buddy.</p>
                <p>The grocery tab is made to get a general idea of what you'll have to buy at the store next time. You can add a recipe's ingredients to the grocery list from the recipe page.</p>
                <p> Please <a href='/login'>log in</a> or <a href='/createaccount'>create an account</a> to
                save recipes and view stats.</p>

                <h2> -OR- </h2>

                <h3>Welcome, User</h3>
                <p>You have 4 saved recipes and 2 lists.</p>
                <p>You have received recipes from your buddies.</p>
            </div>
        )
    }
}

export default HomeScreen;