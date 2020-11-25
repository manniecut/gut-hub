import React, { Component } from 'react';

class HomeScreen extends Component {

    render() {
        return (
            <>
                <h3>Welcome to GutHub!</h3>
                <p>GutHub is a simple recipe tracking and meal planning app.
                </p>
                <p>The goal is to allow you to keep tabs on your favorite recipes,
                with a very simple way to share them so you can stay on the
                same page with people you live or coordinate meals with.
                </p>
                <p> Please <a href='/login'>log in</a> or <a href='/createaccount'>create an account</a> to 
                save recipes and view stats.</p>

                <h2> -OR- </h2>

                <h3>Welcome, User</h3>
                <p>You have 4 saved recipes and 2 lists.</p>
                <p>You have received recipes from your buddies.</p>
            </>
        )
    }
}

export default HomeScreen;