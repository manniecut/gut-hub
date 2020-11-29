import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CookList extends Component {

    render() {
        return (
            <>
                <h2>CookList: Holiday</h2>
                <p>
                    Some recipies to enjoy on holiday.
            </p>
                <ul>
                    <li className='recipe'><Link to="/recipe">Hot Dogs</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Fried Chicken</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Beef Stew</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Pasta Alfredo</Link>
                        <button type='button'>Remove</button></li>
                    <li className='recipe'><Link to="/recipe">Pizza</Link>
                        <button type='button'>Remove</button></li>
                </ul>
            </>
        )
    }
}

export default CookList;