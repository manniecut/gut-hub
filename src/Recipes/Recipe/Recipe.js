import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './Recipe.css';
import RecipeControls from './RecipeControls';

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
                        ingredients: recipe.ingredients.split('#'),
                        directions: recipe.directions.split('#')
                    },
                    partsReady: true
                })
            })
            .catch(error => alert('Recipe could not be found. Please Try Again'));
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


    /** Rendering */

    renderIngredientsList = () => {
        if (this.state.partsReady === true) {
            const ingredients = this.state.parsed.ingredients
            return (
                <ul>
                    {ingredients.map(function (listvalue, i) {
                        return <li key={i}>{listvalue}</li>
                    })}
                </ul>
            )
        }
    }

    renderDirectionsList = () => {
        if (this.state.partsReady === true) {
            const directions = this.state.parsed.directions
            return (
                <ol>
                    {directions.map(function (listvalue, i) {
                        return <li key={i}>{listvalue}</li>
                    })}
                </ol>
            )
        }
    }

    renderRecipeControls = () => {
        const buddyid = this.state.buddy.id
        const userid = this.context.user.userid
        return (
            <RecipeControls
                buddyid={buddyid}
                userid={userid}
                recipeid={this.state.recipe.id}
                history={this.props.history}
            />
        )
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
                    <h3>Ingredients</h3>
                    {this.renderIngredientsList()}

                </div>
                <div>
                    <h3>Directions</h3>
                    {this.renderDirectionsList()}
                </div>
                {this.renderRecipeControls()}
            </div>
        )
    }
}

export default Recipe;