import React, { Component } from 'react';
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

    // handleSaveUpdate = (recipe, currentlySaved) => {
    //     const loggedInUser = this.context.user.userid
    //     const fullString = (currentlySaved.concat(recipe)).toString()
    //     const user = this.context.users[loggedInUser - 1]
    //     user.savedrecipes = fullString
    //     console.log(user)
    //     fetch(`${config.API_ENDPOINT}/users/${loggedInUser}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //         },
    //         body: JSON.stringify(user)
    //     })
    //             .then(res => {
    //         if (!res.ok)
    // return res
    //     .then(e => Promise.reject(e))
    // return res
    //             })
    //             .then(this.context.updateUser(user))
    //     .catch(error => { console.log('error') })
    // }


    handleRecipeSave = e => {
        console.log('handle recipe save button')

        const { currentlySaved, recipeToSave } = this.state
        const userIndex = ((parseInt(this.state.loggedInUser)) - 1)
        console.log(userIndex)
        //setting userIndex, currentlySaved, recipeToSave



        if (this.state.buttonText === "Save") {
            console.log('saving..')

            const fullString = (currentlySaved.concat(recipeToSave)).toString()
            console.log(fullString)
            //create fullString from combining saved and new recipe strings


            const user = this.context.users[userIndex]
            //user.savedrecipes = fullString
            console.log(user)
            //creating user object and adding new string


            //     fetch(`${config.API_ENDPOINT}/users/${loggedInUser}`, {
            //         method: 'PATCH',
            //         headers: {
            //             'content-type': 'application/json',
            //         },
            //         body: JSON.stringify(user)
            //     })
            //         .then(res => {
            //             if (!res.ok)
            //                 return res
            //                     .then(e => Promise.reject(e))
            //             return res
            //         })
            //         .then(this.context.updateUser(user))
            //         .catch(error => { console.log('error') })
            //sending patch to server



        } else if (this.state.buttonText === "UnSave") {
            console.log('unsaving..')

            const filteredString = (currentlySaved.filter(num => num !== recipeToSave)).toString()
            console.log(filteredString)
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

/*
TO DO:

<button className="recipe__button">
    <Link to={`/edit/recipe/${this.props.recipeid}`}><span>Edit</span></Link>
</button>


<button className="recipe__button">
    <span>+Groceries</span>
</button>

*/