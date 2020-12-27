import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import './Navbar.css';

// this is the navigation bar component, it adjusts to the screen size and links are highlighted when selected

class Navbar extends Component {

    render() {
        return (
            <header className="App__header">
                <div>
                    <h1>
                        <Link className='nav__link' to='/'><img src={logo} alt='Gut-Hub logo' />GutHub</Link>
                    </h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <h2><NavLink className='nav__link' to="/search">Search</NavLink></h2>
                        </li>
                        <li>
                            <h2><NavLink className='nav__link' to="/myrecipes">MyRecipes</NavLink></h2>
                        </li>
                        <li>
                            <h2><NavLink className='nav__link' to="/messages">Messages</NavLink></h2>
                        </li>
                        <li>
                            <h2><NavLink className='nav__link' to="/buddies">Buddies</NavLink></h2>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Navbar;