import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ingredient from './Ingredient/Ingredient';
import Direction from './Direction/Direction';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './Recipe.css';

class Recipe extends Component {
    state = {
        recipe: [],
        parsed: [],
        buddy: []
    }

    static contextType = GutHubContext;

    componentDidMount() {
        const id = this.props.match.params.recipeid
        fetch(`${config.API_ENDPOINT}/recipes/${id}`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(recipe => {
                this.getCreatorName(recipe.creator)
                this.setState({
                    recipe: recipe,
                    parsed: {
                        ingredients: JSON.parse(recipe.ingredients),
                        directions: JSON.parse(recipe.directions)
                    }
                })
            })
            .catch(error => alert('Messages could not be found. Please Try Again'));
    }

    getCreatorName = (buddyId) => {
        fetch(`${config.API_ENDPOINT}/users/${buddyId}/`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(buddy => {
                this.setState({ buddy: buddy })
            })
            .catch(error => alert('Buddy could not be found. Please Try Again'));
    }


    renderIngredientsList = (ingredients) => {
        console.log(typeof (ingredients))
        console.log(ingredients)
        /*Object.entries(ingredients).map(([key, ingredient], i) =>(
            <Ingredient 
                ingredientId={key}
                ingredientName={ingredient[key]}
            />
        ))*/

        /*
        const objectLength = Object.keys(ingredients).length;

        for (let i = 0; i <= objectLength; i++) {
            return (
                <Ingredient
                    ingredientId={i}
                    ingredientName={ingredients[i]} />
            )


        }*/



        
        for (const key in ingredients) {
            return (
                <Ingredient
                    ingredientId={key}
                    ingredientName={ingredients[key]} />
            )
        }

    }

    renderDirectionsList = (directions) => {
        for (const key in directions) {
            return (
                <Direction
                    directionId={key}
                    directionText={directions[key]}
                />
            )
        }
    }

    render() {
        const recipe = this.state.recipe
        const directions = this.state.parsed.directions
        const ingredients = this.state.parsed.ingredients
        console.log(ingredients, directions)
        return (
            <div className='recipe'>
                <span >
                    <h2>{recipe.title}</h2>
                    <Link to={`/edit/recipe/${recipe.id}`}>edit</Link>
                </span>
                <h3>by: {this.state.buddy.username}</h3>
                <p>{recipe.quickdesc}</p>
                <div>
                    <ul>
                        <h3>Ingredients</h3>
                        {this.renderIngredientsList(ingredients)}
                    </ul>
                </div>
                <div>
                    <ol>
                        <h3>Directions</h3>
                        {this.renderDirectionsList(directions)}
                    </ol>
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
                        <span>Remove</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default Recipe;

/*
TO DO:
<button className="recipe__button">
    <span>+Groceries</span>
</button>


*/