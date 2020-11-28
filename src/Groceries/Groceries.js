import React, { Component } from 'react';
import './Groceries.css'

class Groceries extends Component {

    render() {
        return (
            <div className='grocerypage'>
                <h2>Grocery List</h2>
                <ul>
                    <li>3 Cucumbers</li>
                    <li>2 Lettuce</li>
                    <li>4 Tomatos</li>
                    <li>1 Onions</li>
                    <li>1 Olive Oil</li>
                    <li>4 Vinegar</li>
                </ul>
                <button type='button'>
                    Clear List
                    </button>
            </div>
        )
    }
}

export default Groceries;