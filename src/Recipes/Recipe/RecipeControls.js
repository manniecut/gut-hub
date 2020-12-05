import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import DeleteButton from './DeleteButton';
import config from '../../config';

class RecipeControlsEdit extends Component {

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
        const creator = this.props.buddyid
        const viewer = this.context.user.id
        console.log(viewer, creator)
        if (creator === viewer) {
            return (
                <button className="recipe__button" type='button' onClick={() => this.handleClickDelete()}>
                    <span>Delete</span>
                </button>
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
                    <span>Send</span>
                </button>

                <DeleteButton 
                    creator={this.props.buddyid}
                    viewer={this.context.user.id}
                    recipeid={this.props.recipeid}
                    history={this.props.history}
                />
            </div>
        )
    }
}



export default RecipeControlsEdit;

/*
FUTURE UPDATES:

<button className="recipe__button">
    <span>+CookList</span>
</button>


<button className="recipe__button">
    <Link to={`/edit/recipe/${this.props.recipeid}`}><span>Edit</span></Link>
</button>


<button className="recipe__button">
    <span>+Groceries</span>
</button>

*/