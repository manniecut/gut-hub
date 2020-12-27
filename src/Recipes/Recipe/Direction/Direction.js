import React from 'react';

// this component is for a Directions list item

class Direction extends React.Component {

    render() {

        const { directionId, directionText } = this.props

        return (
            <li key={directionId}>
                {directionText}
            </li>
        )
    }
}


export default Direction;