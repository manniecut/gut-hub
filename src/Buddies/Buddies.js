import React, { Component } from 'react';
import Buddy from './Buddy/Buddy'
import './Buddies.css'

class Buddies extends Component {

    render() {
        return (
            <div className='buddiespage'>
                <h2>Buddies</h2>
                <ul>
                    <Buddy />
                    <Buddy />
                    <Buddy />
                    <Buddy />
                </ul>
                <button className="float">
                    <span className="button-label my-float"><a className="buddy__add__button" href="/add/buddy">Add Buddy</a></span>
                </button>
            </div>
        )
    }
}

export default Buddies;