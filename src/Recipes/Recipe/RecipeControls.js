import React, { Component } from 'react';
import './Recipe.css';

class RecipeControls extends Component {

    render() {
        return (
            <div className="recipe__controls">
                <button className="recipe__button">
                    <span>Save</span>
                </button>
                <button className="recipe__button">
                    <span>Share</span>
                </button>
                <button className="recipe__button" onClick={this}>
                    <span>+CookList</span>
                </button>
            </div>
        )
    }
}



export default RecipeControls;

/*
TO DO:
<button className="recipe__button">
    <span>+Groceries</span>
</button>

*/