import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Result from './Result/Result'
import SearchForm from './SearchForm/SearchForm';
import GutHubContext from '../GutHubContext';
import config from '../config';
import './Search.css';

class Search extends Component {

    state = {
        recipes: []
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



    render() {
        return (
            <div className='SearchPage'>
                <h2>Recipes</h2>
                <SearchForm />
                <ol className='rectangle-list'>Results:
                {this.state.recipes.map(recipe => 
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
        )
    }
}

export default Search;