import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../../../GutHubContext';
import './CookListSummary.css'

class CookListSummary extends Component {
    static defaultProps = {
        onDeleteList: () => { }
    }

    static contextType = GutHubContext;



    render() {
        const { id, title, quickdesc } = this.props
        const cooklistUrl = (`/cooklist/${id}`)
        return (
                <li className='CookListSummary'>
                    <h3 className='CookListSummary__username'><Link to={cooklistUrl}>{title}</Link></h3>
                    <p>
                        {quickdesc}
                    </p>
                    <button className='CookListSummary__delete' type='button'>Remove CookList</button>
                </li>
        )
    }
}

export default CookListSummary;