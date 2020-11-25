import React, { Component } from 'react';

class SavedCookLists extends Component {

    render() {
        return (
            <>
                <h2>CookLists</h2>
                <ul>
                    <li class='cooklist'><a href="/cooklist">Weekly</a>
                        <p>List for weekly nutrition and efficiency</p>
                        <button type='button'>Remove CookList</button>
                    </li>
                    <li class='cooklist'><a href="/cooklist">Holiday</a>

                        <p>List for Festivities!</p>
                        <button type='button'>Remove CookList</button>
                    </li>
                    <li class='cooklist'><a href="/cooklist">Desserts</a>
                        <p>Yummy Desserts</p>
                        <button type='button'>Remove CookList</button>
                    </li>
                    <li class='cooklist'><a href="/cooklist">Mannie's Favorites</a>
                        <p>Mannie's favorite food</p>
                        <button type='button'>Remove CookList</button>
                    </li>
                </ul>
            </>
        )
    }
}

export default SavedCookLists;