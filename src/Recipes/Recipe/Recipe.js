import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import RecipeControls from './RecipeControls';
import config from '../../config';
import './Recipe.css';

// this component displays the recipes information

class Recipe extends Component {

    state = {
        recipe: [],
        parsed: [],
        buddy: [],
        partsReady: false
    }

    static contextType = GutHubContext;

    // gets the recipe's information and adds to state
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

    // uses the creator's id to find their name
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


    // the directions and ingredients lists generate list items for each item that is added them

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
                <ol className='directions__list'>
                    {directions.map(function (listvalue, i) {
                        return <li key={i}>{listvalue}</li>
                    })}
                </ol>
            )
        }
    }

    //the recipe controls component has different controls based on the logged in user (ex: save/unsave, delete)
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
                {this.renderRecipeControls()}
                <div>
                    <h3>Ingredients</h3>
                    {this.renderIngredientsList()}

                </div>
                <div>
                    <h3>Directions</h3>
                    {this.renderDirectionsList()}
                </div>
            </div>
        )
    }
}


export default Recipe;