import React, { Component } from 'react';
import CookListSummary from './CookListSummary/CookListSummary';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './SavedCookLists.css';

class SavedCookLists extends Component {

    state = {
        cooklists: []
    }

    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = GutHubContext

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/cooklists`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();

            })
            .then(cooklists => {
                this.setState({
                    cooklists: cooklists
                })
            })
            .catch(error => alert('Recipes could not be found. Please Try Again'));

    }

    render() {
        return (
            <div className='SavedCookListsPage'>
                <h2>CookLists</h2>
                <ul>
                    {this.state.cooklists.map(cooklist =>

                        <CookListSummary
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

export default SavedCookLists;