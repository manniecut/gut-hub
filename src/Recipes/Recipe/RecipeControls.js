import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import config from '../../config';

class RecipeControlsEdit extends Component {
    state = {
        buddyid: [],
        userid: []
    }

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

    renderDeleteButton() {
        const { userid, buddyid } = this.props
        this.setState({
            buddyid: buddyid,
            userid: userid
        })
        if (parseInt(userid) === parseInt(buddyid)) {
            return (
                <>
                    <button className="recipe__button">
                        <span>Delete</span>
                    </button>
                </>
            )
        }
    }

    render() {
        return (
            <div className="recipe__controls">
                <button className="recipe__button">
                    <span>Save</span>
                </button>
                <button className="recipe__button">
                    <span>Share</span>
                </button>
                <button className="recipe__button">
                    <span>+CookList</span>
                </button>
                <button className="recipe__button" type='button' onClick={this.handleClickDelete}>
                    <span>Delete</span>
                </button>
            </div>
        )
    }
}



export default RecipeControlsEdit;

/*
TO DO:

<button className="recipe__button">
    <Link to={`/edit/recipe/${this.props.recipeid}`}><span>Edit</span></Link>
</button>


<button className="recipe__button">
    <span>+Groceries</span>
</button>

*/