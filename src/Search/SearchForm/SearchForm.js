import React, { Component } from 'react';
import './SearchForm.css'

class SearchForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }


    render() {
        return (
            <form className="search__form" onSubmit={this.handleSubmit} >
                <h4>Filter:</h4>
                <input type='query' name='query' id='query' onChange={e => this.props.updateQuery(e.target.value)} required />

                <select id='source' name='source' onChange={e => this.props.updateFilter(e.target.value)}>
                    <option value="false">All Recipes</option>
                    <option value="true">Saved Recipes</option>
                </select>
            </form>
        )
    }
}

export default SearchForm;


/*
work on the filtering function

*/