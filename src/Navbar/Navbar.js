import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Navbar.css';

class Navbar extends Component {

    render() {
        return (
            <header className="App__header">
                <div>
                    <h1>
                        <Link className='nav__link' to='/'><img src={logo} />GutHub</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <h3><NavLink className='nav__link' to="/search">Search</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink className='nav__link' to="/myrecipes">MyRecipes</NavLink></h3>
                        </li>
                        <li>
                            <h3><NavLink className='nav__link' to="/messages">Messages</NavLink></h3>
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

Search to magnifying glass

<li>
    <h3><NavLink className='nav__link' to="/cooklists">CookLists</NavLink></h3>
</li>

<li>
   <h3><NavLink className='nav__link' to="/groceries">Groceries</NavLink></h3>
</li>

    */