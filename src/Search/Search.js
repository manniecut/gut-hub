/* to do: add recipe will be at bottom*/

import React, { Component } from 'react';
import Result from './Result/Result'
import SearchForm from './SearchForm/SearchForm';
import './Search.css'

class Search extends Component {

    render() {
        return (
            <div className='SearchPage'>
                <h2>Recipes</h2>
                <SearchForm />
                <ol className='rectangle-list'>Results:
                <Result />
                    <Result />
                    <Result />
                    <Result />
                    <Result />
                </ol>
                <button className="float">
                    <span className="button-label my-float"><a href='/add/recipe' className='recipe__add__button'>Add Recipe</a></span>
                </button>
            </div>
        )
    }
}

export default Search;