import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {

    render() {
        return (
            <div className='recipe'>
                <span className="package-item js-package-item tracking-title">
                    <h2>Simple Salad</h2>
                    <a href='/edit/recipe'>edit</a>
                </span>
                <h3 className="li-nickname">by: username</h3>
                <p className="li-description">This is a super easy and tasty salad.</p>
                <div className="status-div">
                    <ol>
                        <h4>Ingredients</h4>
                        <p className="li-status item">1 Cucumbers</p>
                        <p className="li-status item">Lettuce</p>
                        <p className="li-status item">1 Tomato</p>
                        <p className="li-status item">1/2 Onion</p>
                        <p className="li-status item">1 Tbsp Olive Oil</p>
                        <p className="li-status item">1 Tbsp Vinegar</p>
                        <p className="li-status item">Salt</p>
                    </ol>
                </div>
                <div>
                    <p className="li-location">1. Cut all your veggies up to whatever size you like</p>
                    <p className="li-location">2. Mix them all up in a bowl</p>
                    <p className="li-location">3. Add the oil and Vinegar</p>
                    <p className="li-location">4. Salt to preference and enjoy!</p>
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