import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';
import { orderUsers } from '../../guthub-helpers';
import GutHubContext from '../../GutHubContext';
import './Recipe.css'

//the recipe controls component has different controls based on the logged in user (ex: save/unsave, delete)

class RecipeControls extends Component {

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    static contextType = GutHubContext;

    // renders the send button, which links to a paget with the send component, and takes the current recipe information along as a parameter 
    renderSender() {
        const loggedInUser = this.context.user.userid
        const buddyList = (orderUsers(this.context.users))[loggedInUser - 1].buddylist.split(',')
        // eslint-disable-next-line
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