import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CookList extends Component {

    render() {
        return (
            <>
                <h2>CookList: Summer Grilling</h2>
                <p>
                    Some recipies to enjoy outside in the summer.
            </p>
                <ul>
                    <li className='recipe'><Link to="/recipe">Grilled Chicken</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Grilled Steak</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">S'mores</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Campfire Baked Potato</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Pizza</Link>
                        <button type='button'>Remove</button></li>
                </ul>
            </>
        )
    }
}

export default CookList;