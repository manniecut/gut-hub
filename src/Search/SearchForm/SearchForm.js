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
                <input className="filterquery" name='query' id='query' onChange={e => this.props.updateQuery(e.target.value)} required />
            </form>
        )
    }
}

export default SearchForm;


/*
work on the filtering function

*/