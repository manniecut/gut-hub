import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Result from '../Search/Result/Result'
import SearchForm from '../Search/SearchForm/SearchForm';
import GutHubContext from '../GutHubContext';
import config from '../config';
import '../Search/Search.css';

class MyRecipes extends Component {

    state = {
        recipes: [],
        query: ''
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = GutHubContext

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/recipes`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(recipes => {
                const savedRecs = this.getSavedRecipes(recipes)
                console.log(savedRecs)
                this.setState({
                    recipes: savedRecs
                })
            })
            .catch(error => console.log('Recipes could not be found. Please Try Again'));

    }

    getSavedRecipes = (recipes) => {
        // compares saved to stored and stores the saved ones
        const loggedInUser = this.context.user.userid
        const savedRecIndexs = this.context.users[loggedInUser - 1].savedrecipes.split(',')
        const savedRecipes = []
        savedRecIndexs.forEach(index => {
            recipes.forEach(recipe => {
                if (recipe.id === parseInt(index)) {
                    savedRecipes.push(recipe)
                }
            })
        })
        return savedRecipes
    }

    handleQueryUpdate = query => {
        this.setState({
            query: query
        })

    }



    render() {
        if (this.state.recipes === []) {
            return(
                <p>You haven't saved any recipes yet</p>
            )
        } else {
            const filteredRecipes = this.state.recipes.filter((recipe) => {
                return recipe.title.toLowerCase().includes(this.state.query.toLowerCase())
            })
            return (
            <div className='SearchPage'>
                <h2>Saved Recipes</h2>
                <SearchForm
                    updateQuery={this.handleQueryUpdate}
                />
                <ol className='rectangle-list'>Results:
                {filteredRecipes.map(recipe =>
                    <Result
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        quickdesc={recipe.quickdesc}
                        resultType="recipes"
                    />
                )}
                </ol>
                <button className="float">
                    <span className="button-label my-float"><Link to='/add/recipe' className='recipe__add__button'>Add Recipe</Link></span>
                </button>
            </div>
        )}
    }
}

export default MyRecipes;