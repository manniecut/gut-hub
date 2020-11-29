import React, { Component } from 'react';
import './SearchForm.css'

class SearchForm extends Component {

    render() {
        return (
            <form className="search__form">
                <h4>Filter:</h4>
                <input type='query' name='query' id='query' required />

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


/*
work on the filtering function

*/