import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../../GutHubContext';
import './Result.css'

class Result extends Component {
    static defaultProps = {
        onDeleteRecipe: () => { }
    }

    static contextType = GutHubContext;

    render() {
        const { id, title, quickdesc } = this.props
        const recipeUrl = (`/recipe/${id}`)
        return (
            <>
                <li key={id} className='Result'>

                    <h3 className='Result__username'>
                        <Link to={recipeUrl}>{title}</Link>
                    </h3>
                    <p>
                        {quickdesc}
                    </p>

                </li>
            </>
        )
    }
}

export default Result;