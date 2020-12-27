import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import config from '../../config';

// this component is a delete button that sends a delete request to the server

class DeleteButton extends Component {

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    static contextType = GutHubContext;

    handleClickDelete = e => {
        e.preventDefault()
        const recipeid = this.props.recipeid
        fetch(`${config.API_ENDPOINT}/recipes/${recipeid}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res
                        .then(e = Promise.reject(e))
                return res
            })
            .then(() => {
                this.props.history.push('/search')
            })
            .catch(error => {
                console.error({ error })
            })
    }


    render() {
        const viewer = this.context.user.userid
        const creator = this.props.creator
        if (creator === viewer) {
            return (
                <button className="recipe__button" type='button' onClick={this.handleClickDelete}>
                    <span>Delete</span>
                </button>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }
}



export default DeleteButton;