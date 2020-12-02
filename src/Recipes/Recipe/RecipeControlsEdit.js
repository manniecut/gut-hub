import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

class RecipeControlsEdit extends Component {

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
                <button className="recipe__button">
                    <Link to={`/edit/recipe/${this.props.recipeid}`}><span>Edit</span></Link>
                </button>
                <button className="recipe__button">
                    <span>Remove</span>
                </button>
            </div>
        )
    }
}



export default RecipeControlsEdit;

/*
TO DO:
<button className="recipe__button">
    <span>+Groceries</span>
</button>


if

*/