import React from 'react';
import './Ingredient.css'

class Ingredient extends React.Component {


    render() {
        const { value } = this.props
        console.log(this.props)

        return (
            <li className='ingredient'>
                {value}
            </li>
        )


    }
}


export default Ingredient;