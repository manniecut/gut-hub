import React, { Component } from 'react';
import CookListSummary from './CookListSummary/CookListSummary';
import GutHubContext from '../../GutHubContext';
import SearchForm from '../../Search/SearchForm/SearchForm';
import { orderUsers } from '../../guthub-helpers';
import config from '../../config';
import './SavedCookLists.css';

class SavedCookLists extends Component {

    state = {
        cooklists: [],
        savedCookLists: [],
        selected: [],
        query: '',
        savedOnly: false,
        created: false,
    }

    static contextType = GutHubContext

    componentDidMount() {
        // sets state to cooklist db
        fetch(`${config.API_ENDPOINT}/cooklists`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(cooklists => {
                const savedLists = this.getSavedLists(cooklists)
                this.setState({
                    cooklists: cooklists,
                    savedCookLists: savedLists
                })
            })
            .catch(error => alert('Cooklists could not be found. Please Try Again'));
    }

    getSavedLists = (cooklists) => {
        // compares saved to stored and stores the saved ones
        const loggedInUser = this.context.user.userid
        const savedCookLists = (orderUsers(this.context.users))[loggedInUser - 1].received.split(',')
        const savedLists = []
        savedCookLists.forEach(savedList => {
            cooklists.forEach(list => {
                if (list.id === parseInt(savedList)) {
                    savedLists.push(list)
                }
            })
        })
        return savedLists
    }



    /** Form to State functions */

    handleQueryUpdate = query => {
        this.setState({
            query: query
        })

    }

    handleSavedFilter = filter => {
        this.setState({
            savedOnly: filter
        })
    }


    render() {
        if (this.state.savedOnly === true) {
            const filteredCookLists = this.state.savedCookLists.filter((cooklist) => {
                return cooklist.title.toLowerCase().includes(this.state.query.toLowerCase())
            })
            return (
                <div className='SavedCookListsPage'>
                    <h2>CookLists</h2>
                    <SearchForm
                        updateQuery={this.handleQueryUpdate}
                        updateFilter={this.handleSavedFilter}
                    />
                    <ul>
                        {filteredCookLists.map(cooklist =>

                            <CookListSummary
                                key={cooklist.id}
                                id={cooklist.id}
                                title={cooklist.title}
                                quickdesc={cooklist.quickdesc}
                            />
                        )}
                    </ul>
                </div>
            )
        } else {
            const filteredCookLists = this.state.cooklists.filter((cooklist) => {
                return cooklist.title.toLowerCase().includes(this.state.query.toLowerCase())
            })
            return (
                <div className='SavedCookListsPage'>
                    <h2>CookLists</h2>
                    <SearchForm
                        updateQuery={this.handleQueryUpdate}
                        updateFilter={this.handleSavedFilter}
                    />
                    <ul>
                        {filteredCookLists.map(cooklist =>

                            <CookListSummary
                                key={cooklist.id}
                                id={cooklist.id}
                                title={cooklist.title}
                                quickdesc={cooklist.quickdesc}
                            />
                        )}
                    </ul>
                </div>
            )
        }
    }
}

export default SavedCookLists;