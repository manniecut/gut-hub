import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Buddy.css'

class Buddy extends Component {

    render() {
        return (
            <>

                <li className='Buddy'>
                    <Link to="/search/userid">
                        <h3 className='Buddy__username'>Buddy</h3>
                    </Link>
                    <button className='Buddy__delete' type='button'>Remove Buddy</button>
                    <p>
                        Received: <Link to="/recipe">Recipe</Link>
                    </p>

                </li>
            </>
        )
    }
}

export default Buddy;