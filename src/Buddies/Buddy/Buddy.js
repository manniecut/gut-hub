import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './Buddy.css'

class Buddy extends Component {
    state = {
        buddy: []
    }
    static defaultProps = {
        onDeleteBuddy: () => { }
    }

    static contextType = GutHubContext;

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
            }
            )
            .catch(error => alert('Buddy could not be found. Please Try Again'));

    }

    handleClickDelete = e => {

    }

    render() {
        const { id } = this.props
        return (
            <>
                <li className='Buddy'>
                    <Link to={`/search/${this.state.buddy.id}`}>
                        <h3 className='Buddy__username'>{this.state.buddy.username}</h3>
                    </Link>
                    <button className='Buddy__delete' type='button'>Remove Buddy</button>
                </li>
            </>
        )
    }
}

export default Buddy;