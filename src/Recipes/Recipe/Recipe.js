import React, { Component } from 'react';
import './Recipe.css';

class Recipe extends Component {

    render() {
        return (
            <div class='recipe'>
                <span class="package-item js-package-item tracking-title">
                    <h2>Simple Salad</h2>
                    <a href='/edit/recipe'>edit</a>
                </span>
                <h3 class="li-nickname">by: username</h3>
                <p class="li-description">This is a super easy and tasty salad.</p>
                <div class="status-div">
                    <ol>
                        <h4>Ingredients</h4>
                        <p class="li-status item">1 Cucumbers</p>
                        <p class="li-status item">Lettuce</p>
                        <p class="li-status item">1 Tomato</p>
                        <p class="li-status item">1/2 Onion</p>
                        <p class="li-status item">1 Tbsp Olive Oil</p>
                        <p class="li-status item">1 Tbsp Vinegar</p>
                        <p class="li-status item">Salt</p>
                    </ol>
                </div>
                <div>
                    <p class="li-location">1. Cut all your veggies up to whatever size you like</p>
                    <p class="li-location">2. Mix them all up in a bowl</p>
                    <p class="li-location">3. Add the oil and Vinegar</p>
                    <p class="li-location">4. Salt to preference and enjoy!</p>
                </div>
                <div class="package-item-controls">
                    <button class="package-item-delete js-item-delete">
                        <span class="button-label">Save</span>
                    </button>
                    <button class="package-item-delete js-item-delete">
                        <span class="button-label">Share</span>
                    </button>
                    <button class="package-item-delete js-item-delete">
                        <span class="button-label">+CookList</span>
                    </button>
                    <button class="package-item-delete js-item-delete">
                        <span class="button-label">+Shop</span>
                    </button>
                    <button class="package-item-delete js-item-delete">
                        <span class="button-label">Remove</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Recipe;