import React, { Component } from 'react';
import Result from './Result/Result'
import SearchForm from './SearchForm/SearchForm';
import GutHubContext from '../GutHubContext';
import config from '../config';
import './Search.css';

// this component renders a searchable list of all availble recipes

class Search extends Component {

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

    // populates the list with recipes from the database
    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/recipes`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(recipes => {
                this.setState({
                    recipes: recipes
                })
            })
            .catch(error => alert('Recipes could not be found. Please Try Again'));

    }

    // keeps the state updated with the user's query
    handleQueryUpdate = query => {
        this.setState({
            query: query
        })
    }


    render() {
        let filteredRecipes = this.state.recipes.filter((recipe) => {
            return recipe.title.toLowerCase().includes(this.state.query.toLowerCase())
        })
        return (
            <div className='SearchPage'>
                <h2>Search Recipes</h2>
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
            </div>
        )
    }
}


export default Search;