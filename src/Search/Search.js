/* to do: add recipe will be at bottom*/

import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <>
                <form class="search__form">
                    <h2>Search:</h2>
                    <div>
                        <input type='query' name='query' id='query' required />
                    </div>
                    <label for='querytype'>Search Options:</label>
                    <select id='searchfor' name='searchfor'>
                        <option>Recipe Title</option>
                        <option>Ingredient</option>
                        <option>Cooking Method</option>
                        <option>Contributer</option>
                    </select>
                    <select id='source' name='source'>
                        <option>Saved Recipes</option>
                        <option>All Recipes</option>
                    </select>
                    <div className='AddNote__buttons'>
                        <button type='button'>
                            Clear
                </button>
                        <button type='submit'>
                            Search
                </button>
                    </div>
                </form>
                <ol>Results:
            <li><a href="/recipe">Hot Dogs</a>
                        <p>Quick description so yummy.</p>
                    </li>
                    <li><a href="/recipe">Fried Chicken</a>
                        <p>Quick description so yummy.</p>
                    </li>
                    <li><a href="/recipe">Beef Stew</a>
                        <p>Quick description so yummy.</p>
                    </li>
                    <li><a href="/recipe">Pasta Alfredo</a>
                        <p>Quick description so yummy.</p>
                    </li>
                    <li><a href="/recipe">Pizza</a>
                        <p>Quick description so yummy.</p>
                    </li>
                </ol>
            </>
        )
    }
}

export default Search;