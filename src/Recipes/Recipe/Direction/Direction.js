import React from 'react';


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