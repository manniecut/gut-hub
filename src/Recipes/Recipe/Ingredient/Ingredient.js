import React from 'react';

class Ingredient extends React.Component {


    render() {
        const { ingredientId, ingredientName } = this.props
        console.log(ingredientId)

        return (
            <li key={ingredientId}>
                {ingredientName}
            </li>
        )


    }
}


export default Ingredient;