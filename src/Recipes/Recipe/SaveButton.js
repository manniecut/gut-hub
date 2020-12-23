import React, { Component } from 'react';
import { orderUsers } from '../../guthub-helpers';
import GutHubContext from '../../GutHubContext';
import config from '../../config';

class SaveButton extends Component {
    
    state = {
        loggedInUser: '',
        currentlySaved: '',
        recipeToSave: [],
        loaded: false,
        buttonText: 'Save'
    }

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }
    static contextType = GutHubContext;


    componentDidUpdate() {
        const currentlySavedRecipes = this.props.currentlySaved
        const recipeToSave = (this.props.recipeToSave).toString()
        if ((this.state.loaded === false) && (currentlySavedRecipes.includes(recipeToSave) === true)) {
            this.setState({
                loggedInUser: this.context.user.userid,
                currentlySaved: currentlySavedRecipes,
                recipeToSave: recipeToSave,
                loaded: true,
                buttonText: "UnSave"
            })
        } else if ((this.state.loaded === false) && (currentlySavedRecipes.includes(recipeToSave) === false)) {
            this.setState({
                loggedInUser: this.context.user.userid,
                currentlySaved: currentlySavedRecipes,
                recipeToSave: recipeToSave,
                loaded: true,
                buttonText: "Save"
            })
        }
    }


    handleRecipeSave = e => {
        const { currentlySaved, recipeToSave } = this.state
        const userIndex = ((parseInt(this.state.loggedInUser)) - 1)
        const user = (orderUsers(this.context.users))[userIndex]
        if (this.state.buttonText === "Save") {
            const fullString = (currentlySaved.concat(recipeToSave)).toString()
            user.savedrecipes = fullString
            //create fullString from combining saved and new recipe strings and add to user object
            fetch(`${config.API_ENDPOINT}/users/${this.state.loggedInUser}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then(res => {
                    if (!res.ok)
                        return res
                            .then(e => Promise.reject(e))
                    return res
                })
                .then(this.context.updateUser(user))
                .then(this.setState({
                    buttonText: "UnSave"
                }))
                .catch(error => { console.log('error') })
            //sending patch to server
        } else if (this.state.buttonText === "UnSave") {
            const filteredString = (currentlySaved.filter(num => num !== recipeToSave)).toString()
            user.savedrecipes = filteredString
            fetch(`${config.API_ENDPOINT}/users/${this.state.loggedInUser}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(user)
            })
                .then(res => {
                    if (!res.ok)
                        return res
                            .then(e => Promise.reject(e))
                    return res
                })
                .then(this.context.updateUser(user))
                .then(this.setState({
                    buttonText: "Save"
                }))
                .catch(error => { console.log('error') })
            //sending patch to server
        }
    }


    render() {
        return (
            <button
                className={'recipe__button__' + (this.state.buttonText)}
                onClick={this.handleRecipeSave}>
                <span>{this.state.buttonText}</span>
            </button>
        )
    }
}



export default SaveButton;