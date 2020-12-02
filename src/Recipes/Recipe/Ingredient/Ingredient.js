import React from 'react';

class Ingredient extends React.Component {


    render() {
        const { key, value } = this.props
        console.log(this.props)

        return (
            <li key={key}>
                {value}
            </li>
        )


    }
}


export default Ingredient;