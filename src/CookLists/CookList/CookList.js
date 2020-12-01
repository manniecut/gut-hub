import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import Result from '../../Search/Result/Result';
import config from '../../config';
import './CookList.css'

class CookList extends Component {
    state = {
        cooklist: [],
        recipes: []
    }

    static contextType = GutHubContext

    componentDidMount() {
        const cooklistId = this.props.match.params.cooklistid
        fetch(`${config.API_ENDPOINT}/cooklists/${cooklistId}`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(cooklist => {
                const recipesOnList = cooklist.recipeids.split(',')
                const listedRecipes = this.getRecipeInfo(recipesOnList)
                this.setState({
                    cooklist: cooklist,
                    recipes: listedRecipes
                })
            })
            .catch(error => alert('Recipes could not be found. Please Try Again'));
    }

    getRecipeInfo = (recipesOnList) => {
        const recipes = this.context.recipes
        const listedRecipes = [];
        recipesOnList.forEach(listed => {
            recipes.forEach(recipe => {
                if (recipe.id === parseInt(listed)) {
                    listedRecipes.push(recipe)
                }
            })
        })
        return listedRecipes
    }

    render() {
        const cooklist = this.state.cooklist
        return (
            <div className="cooklist__page">
                <h2>CookList: {cooklist.title}</h2>
                <p>
                    {cooklist.quickdesc}
                </p>
                <ul>
                    {this.state.recipes.map(recipe =>
                        <Result
                            key={recipe.id}
                            id={recipe.id}
                            title={recipe.title}
                            quickdesc={recipe.quickdesc}
                            resultType="recipes"
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default CookList;