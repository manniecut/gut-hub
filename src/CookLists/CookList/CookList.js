import React, { Component } from 'react';

class CookList extends Component {

    render() {
        return (
            <>
                <h2>CookList: Holiday</h2>
                <p>
                    Some recipies to enjoy on holiday.
            </p>
                <ul>
                    <li class='recipe'><a href="/recipe">Hot Dogs</a>
                        <button type='button'>Remove</button></li>
                    <li class='recipe'><a href="/recipe">Fried Chicken</a>
                        <button type='button'>Remove</button></li>
                    <li class='recipe'><a href="/recipe">Beef Stew</a>
                        <button type='button'>Remove</button></li>
                    <li class='recipe'><a href="/recipe">Pasta Alfredo</a>
                        <button type='button'>Remove</button></li>
                    <li class='recipe'><a href="/recipe">Pizza</a>
                        <button type='button'>Remove</button></li>
                </ul>
            </>
        )
    }
}

export default CookList;