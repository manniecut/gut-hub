import React, { Component } from 'react';
import './SearchForm.css'

// this is the input form component for the search page

class SearchForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }


    render() {
        return (
            <form className="search__form" onSubmit={this.handleSubmit} >
                <label htmlFor="Filter">Filter:</label>
                <input className="filterquery" name='query' id='query' onChange={e => this.props.updateQuery(e.target.value)} required />
            </form>
        )
    }
}

export default SearchForm;