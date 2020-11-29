import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';

class Recipe extends Component {

    render() {
        return (
            <div className='recipe'>
                <span >
                    <h2>Simple Salad</h2>
                    <Link to='/edit/recipe'>edit</Link>
                </span>
                <h3>by: username</h3>
                <p>This is a super easy and tasty salad.</p>
                <div>
                    <ol>
                        <h4>Ingredients</h4>
                        <p>1 Cucumbers</p>
                        <p>Lettuce</p>
                        <p>1 Tomato</p>
                        <p>1/2 Onion</p>
                        <p>1 Tbsp Olive Oil</p>
                        <p>1 Tbsp Vinegar</p>
                        <p>Salt</p>
                    </ol>
                </div>
                <div>
                    <p>1. Cut all your veggies up to whatever size you like</p>
                    <p>2. Mix them all up in a bowl</p>
                    <p>3. Add the oil and Vinegar</p>
                    <p>4. Salt to preference and enjoy!</p>
                </div>
                <div className="recipe__controls">
                    <button className="recipe__button">
                        <span>Save</span>
                    </button>
                    <button className="recipe__button">
                        <span>Share</span>
                    </button>
                    <button className="recipe__button">
                        <span>+CookList</span>
                    </button>
                    <button className="recipe__button">
                        <span>+Groceries</span>
                    </button>
                    <button className="recipe__button">
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Recipe;