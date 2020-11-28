import React, { Component } from 'react';
import './Buddy.css'

class Buddy extends Component {

    render() {
        return (
            <>

                <li className='Buddy'>
                    <a href="/search/userid">
                        <h3 className='Buddy__username'>Buddy</h3>
                    </a>
                    <button className='Buddy__delete' type='button'>Remove Buddy</button>
                    <p>
                        Received: <a href="/recipe">Recipe</a>
                    </p>

                </li>
            </>
        )
    }
}

export default Buddy;