import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <header className="App__header">
                <div>
                    <h1>
                        <Link to='/'>GutHub</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <h3><a href="/recipes">Recipes</a></h3>
                        </li>
                        <li>
                            <h3><a href="/cooklists">CookLists</a></h3>
                        </li>
                        <li>
                            <h3><a href="/buddies">Buddies</a></h3>
                        </li>
                        <li>
                            <h3><a href="/groceries">Groceries</a></h3>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;