import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../../GutHubContext';
import './Result.css'

// this component is for an individual result on the search list

class Result extends Component {
    static defaultProps = {
        onDeleteRecipe: () => { }
    }

    static contextType = GutHubContext;

    render() {
        const { id, title, quickdesc, resultType } = this.props
        const url = (`/${resultType}/${id}`)
        return (
            <>
                <li key={id} className='Result'>
                    <h3 className='Result__username'>
                        <Link to={url}>{title}</Link>
                    </h3>
                    <p className='recipe__quickdesc'>
                        {quickdesc}
                    </p>

                </li>
            </>
        )
    }
}


export default Result;