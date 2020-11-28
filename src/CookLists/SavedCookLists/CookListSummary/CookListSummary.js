import React, { Component } from 'react';
import './CookListSummary.css'

class CookListSummary extends Component {

    render() {
        return (
            <>

                <li className='CookListSummary'>
                    <h3 className='CookListSummary__username'><a href="/cooklist">CookList</a></h3>
                    <p>
                        Quick description such a good list.
                    </p>
                    <button className='CookListSummary__delete' type='button'>Remove CookList</button>

                </li>
            </>
        )
    }
}

export default CookListSummary;