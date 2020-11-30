import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <header className="App__header">
                <div>
                    <h1>
                        <Link className='nav__link' to='/'>GutHub</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <h3><NavLink className='nav__link' to="/recipes">Recipes</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink className='nav__link' to="/cooklists">CookLists</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink className='nav__link' to="/buddies">Buddies</NavLink></h3>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;


/*

To Do
<li>
   <h3><NavLink className='nav__link' to="/groceries">Groceries</NavLink></h3>
</li>

    */