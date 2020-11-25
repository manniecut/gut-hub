import React, { Component } from 'react';

class Groceries extends Component {

    render() {
        return (
            <>
                <h2>Shopping List</h2>
                <ul>
                    <li>3 Cucumbers</li>
                    <li>2 Lettuce</li>
                    <li>4 Tomatos</li>
                    <li>1 Onions</li>
                    <li>1 Olive Oil</li>
                    <li>4 Vinegar</li>
                </ul>
                <button type='button'>
                    Clear Shopping List
                    </button>
            </>
        )
    }
}

export default Groceries;