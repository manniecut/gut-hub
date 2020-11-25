import React, { Component } from 'react';

class Buddies extends Component {

    render() {
        return (
            <>
                <h2>Buddies</h2>
                <ul>
                    <li class='cooklist'><a href="/search/userid">Angie</a>
                        <button type='button'>Remove Buddy</button>
                        <p>Recieved <a href="/recipe">Beef Stew</a></p>

                    </li>
                    <li class='cooklist'><a href="/search/userid">Steve</a>
                        <button type='button'>Remove Buddy</button>
                        <p>Received <a href="/recipe">Fried Chicken</a></p>
                    </li>
                    <li class='cooklist'><a href="/search/userid">Zack</a>
                        <button type='button'>Remove Buddy</button>
                        <p>Received <a href="/recipe">Pasta Alfredo</a>
                        </p>
                    </li>
                    <li class='cooklist'><a href="/search/userid">Marissa</a>
                        <button type='button'>Remove Buddy</button>
                        <p>Received CookList: <a href="/cooklist">Vegan Desserts</a></p>
                    </li>
                </ul>
            </>
        )
    }
}

export default Buddies;