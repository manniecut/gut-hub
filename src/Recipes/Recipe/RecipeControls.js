import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import { orderUsers } from '../../guthub-helpers';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './Recipe.css'

class RecipeControls extends Component {

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

    renderSender() {
        const loggedInUser = this.context.user.userid
        const buddyList = (orderUsers(this.context.users))[loggedInUser - 1].buddylist.split(',')
        if (buddyList == "") {
            return (<></>)
        } else {
            return (
                <button className="recipe__button">
                    <Link to={`/recipes/${this.props.recipeid}/send`} className="send__link"><span>Send</span></Link>
                </button>
            )
        }


    }





    render() {
        const loggedInUser = this.context.user.userid
        const currentlySaved = (orderUsers(this.context.users))[loggedInUser - 1].savedrecipes.split(',')
        return (
            <div className="recipe__controls">
                <SaveButton
                    currentlySaved={currentlySaved}
                    recipeToSave={this.props.recipeid}
                />
                {this.renderSender()}
                <DeleteButton
                    creator={this.props.buddyid}
                    viewer={this.context.user.userid}
                    recipeid={this.props.recipeid}
                    history={this.props.history}
                />
            </div>
        )
    }
}



export default RecipeControls;

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