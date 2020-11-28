import React, { Component } from 'react';
import './SearchForm.css'

class SearchForm extends Component {

    render() {
        return (
            <form className="search__form">
                <h4>Search:</h4>
                <input type='query' name='query' id='query' required />


                <label htmlFor='querytype'>Search Options:</label>


                <select id='searchfor' name='searchfor'>
                    <option>Recipe Title</option>
                    <option>Ingredient</option>
                    <option>Cooking Method</option>
                    <option>Username</option>
                </select>


                <select id='source' name='source'>
                    <option>Saved Recipes</option>
                    <option>All Recipes</option>
                </select>


                <div>
                    <button type='submit' className='search__button'>
                        Search
                    </button>
                    <button type='button' className='search__button'>
                        Clear
                    </button>
                </div>
            </form>
        )
    }
}

export default SearchForm;