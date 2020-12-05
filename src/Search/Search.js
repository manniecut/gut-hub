import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Result from './Result/Result'
import SearchForm from './SearchForm/SearchForm';
import GutHubContext from '../GutHubContext';
import config from '../config';
import './Search.css';

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

    handleQueryUpdate = query => {
        this.setState({
            query: query
        })

    }

    handleSavedFilter = filter => {
        this.setState({
            saved: filter
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
                    updateFilter={this.handleSavedFilter}
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