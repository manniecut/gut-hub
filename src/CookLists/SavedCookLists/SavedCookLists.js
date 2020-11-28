import React, { Component } from 'react';
import CookListSummary from './CookListSummary/CookListSummary'
import './SavedCookLists.css' 

class SavedCookLists extends Component {

    render() {
        return (
            <div className='SavedCookListsPage'>
                <h2>CookLists</h2>
                <ul>
                    <CookListSummary />
                    <CookListSummary />
                    <CookListSummary />
                    <CookListSummary />
                    <CookListSummary />
                </ul>
            </div>
        )
    }
}

export default SavedCookLists;