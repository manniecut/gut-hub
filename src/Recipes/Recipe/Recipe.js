import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ingredient from './Ingredient/Ingredient';
import Direction from './Direction/Direction';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './Recipe.css';
import RecipeControls from './RecipeControls';
import RecipeControlsEdit from './RecipeControls';

class Recipe extends Component {
    state = {
        recipe: [],
        parsed: [],
        buddy: [],
        partsReady: false
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
                    },
                    partsReady: true
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


    renderIngredientsList = () => {
        if (this.state.partsReady === true) {
            const ingredients = Object.entries(this.state.parsed.ingredients)
            Object.entries(ingredients).forEach(pair => {
                console.log(pair[1])
                let key = pair[1][0]
                let value = pair[1][1]
                console.log(key)
                console.log(value)
                return (
                    <Ingredient
                        key={key}
                        value={value} />
                )
            })
        } else {
            return (
                <Ingredient
                    key={0}
                    value={'loading'}
                />
            )

        }


        /*ingredients.forEach(value => {
            console.log(value)
            return (
                <Ingredient
                    ingredientId={value[0]}
                    ingredientName={value[1]} />
 
            )
 
        })*/


        /*for (const [key, value] of Object.entries(ingredients)) {
            console.log(value)
            return (
                <Ingredient
                    ingredientId={value[0]}
                    ingredientName={value[1]} />
 
            )
        }*/


        /*.map(([key, ingredient], i) =>(
            <Ingredient 
                ingredientId={key}
                ingredientName={ingredient[key]}
            />
        ))*/


        /*for (let i = 1; i < ingredients.length; i++) {
            const ingredient = ingredients[i].value
            return (
                <Ingredient
                    ingredientId={i}
                    ingredientName={ingredient} />
            )
 
        }*/


        /*for (const key in ingredients) {
            console.log(key)
            return (
                <Ingredient
                    ingredientId={key}
                    ingredientName={ingredients[key]} />
            )
        }*/
    }



    renderRecipeControls = () => {
        if (this.state.partsReady === true) {
            return (
                <RecipeControlsEdit
                    recipeid={this.state.recipe.id}
                />
            )
        }
        else {
            return (
                <RecipeControls />
            )
        }
    }



    renderDirectionsList = () => {
        if (this.state.partsReady === true) {
            const directions = this.state.parsed.directions
            for (const key in directions) {
                return (
                    <Direction
                        directionId={key}
                        directionText={directions[key]}
                    />
                )
            }
        } else {
            return (
                <Direction
                    directionId={0}
                    directionText={'loading'}
                />
            )
        }
    }



    render() {
        const recipe = this.state.recipe
        return (
            <div className='recipe'>
                <span >
                    <h2>{recipe.title}</h2>
                </span>
                <h3>by: {this.state.buddy.username}</h3>
                <p>{recipe.quickdesc}</p>
                <div>
                    <ul>
                        <h3>Ingredients</h3>
                        {this.renderIngredientsList()}
                    </ul>
                </div>
                <div>
                    <ol>
                        <h3>Directions</h3>
                        {this.renderDirectionsList()}
                    </ol>
                </div>
                {this.renderRecipeControls()}
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


if

*/