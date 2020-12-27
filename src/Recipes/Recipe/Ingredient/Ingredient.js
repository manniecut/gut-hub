import React from 'react';
import './Ingredient.css'

// this component is for an ingredients list item

class Ingredient extends React.Component {

    render() {
        const { value } = this.props
        return (
            <li className='ingredient'>
                {value}
            </li>
        )
    }
}


export default Ingredient;