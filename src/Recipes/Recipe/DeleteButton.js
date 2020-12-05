import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import config from '../../config';

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
                this.props.history.push('/recipes')
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

/*
TO DO:

<button className="recipe__button">
    <Link to={`/edit/recipe/${this.props.recipeid}`}><span>Edit</span></Link>
</button>


<button className="recipe__button">
    <span>+Groceries</span>
</button>

*/