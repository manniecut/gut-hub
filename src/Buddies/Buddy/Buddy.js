import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './Buddy.css'

// this component is an individual buddy to be displayed on the buddy list

class Buddy extends Component {
    state = {
        buddy: []
    }
    static defaultProps = {
        onDeleteBuddy: () => { }
    }

    static contextType = GutHubContext;

    // when component loads, fetch information for corresponding buddy
    componentDidMount() {
        const buddyId = this.props.id;
        fetch(`${config.API_ENDPOINT}/users/${buddyId}/`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(buddy => {
                this.setState({ buddy: buddy })
            })
            .catch(error => alert('Buddy could not be found. Please Try Again'));
    }

    render() {
        return (
            <>
                <li className='Buddy'>
                    <h3 className='Buddy__username'>
                        {this.state.buddy.username}
                    </h3>
                    <button className='Buddy__delete' type='button' onClick={e => this.props.delete(this.state.buddy.id)}>Remove</button>
                </li>
            </>
        )
    }
}


export default Buddy;