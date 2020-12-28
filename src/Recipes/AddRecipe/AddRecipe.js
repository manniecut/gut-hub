import React, { Component } from 'react';
import GutHubContext from '../../GutHubContext';
import config from '../../config';
import './AddRecipe.css';

// this component is an input form that allows the user to add recipes to the database

class AddRecipe extends Component {
    state = {
        title: '',
        recipetype: '',
        quickdesc: '',
        ingredients: [],
        directions: [],
        addtlnotes: ''
    }

    static contextType = GutHubContext;

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    handleCancel = () => {
        this.props.history.goBack()
    }

    // sends a recipe object to the server for creation in the databse
    handleSubmit = e => {
        e.preventDefault();
        const newRecipe = {
            title: this.state.title,
            recipetype: this.state.recipetype,
            quickdesc: this.state.quickdesc,
            ingredients: (this.state.ingredients.join('#')).toString(),
            directions: (this.state.directions.join('#')).toString(),
            addtlnotes: this.state.addtlnotes,
            creator: this.context.user.userid
        }
        fetch(`${config.API_ENDPOINT}/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newRecipe)
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })
        .then(recipe => {
            this.context.addRecipe(recipe)
            this.props.history.push(`/recipes/${recipe.id}`)
        })
        .catch(error => {alert('Cant add recipe, please try again')})
    }



    /** Form to State Updates */

    handleTitleUpdate = title => {
        this.setState({
            title: title
        })
    }

    handleTypeUpdate = type => {
        this.setState({
            recipetype: type
        })
    }

    handleDescUpdate = quickdesc => {
        this.setState({
            quickdesc: quickdesc
        })
    }

    handleNotesUpdate = addtlnotes => {
        this.setState({
            addtlnotes: addtlnotes
        })
    }



    /** Dynamic Form Functions */
        // these functions add new inputs for their respective fields and links them to the state

    handleIngredientChange = (e) => {
        if ("ingredient".includes(e.target.className)) {
            let ingredients = [...this.state.ingredients]
            ingredients[e.target.dataset.id] = e.target.value
            this.setState({ ingredients })
        } else {
            this.setState({
                ingredients: [e.target.value]
            })
        }
    }

    handleDirectionChange = (e) => {
        if ("direction".includes(e.target.className)) {
            let directions = [...this.state.directions]
            directions[e.target.dataset.id] = e.target.value
            this.setState({ directions })
        } else {
            this.setState({
                directions: [e.target.value]
            })
        }

    }

    addIngredient = (e) => {
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, ""]
        }))
    }

    addDirection = (e) => {
        this.setState((prevState) => ({
            directions: [...prevState.directions, ""]
        }))
    }



    /** Render */

    render() {
        let { ingredients, directions } = this.state
        return (
            <form className='add__recipe__form' onSubmit={this.handleSubmit}>
                <div>
                <h3>New Recipe: {this.state.title}</h3>
                    <label htmlFor='title'>Recipe Title:</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        onChange={e => this.handleTitleUpdate(e.target.value)}
                        required />
                </div>
                <div>
                    <label htmlFor='quickdesc'>Quick Description:</label>
                    <input
                        type='text'
                        name='quickdesc'
                        id='quickdesc'
                        onChange={e => this.handleDescUpdate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor='recipetype'>Select Recipe Type:</label>
                    <select
                        id='recipetype'
                        name='recipetype'
                        onChange={e => this.handleTypeUpdate(e.target.value)}
                        defaultValue=""
                        required
                    >
                        <option value="" disabled hidden>Choose here</option>
                        <option value='Baking'>Baking</option>
                        <option value='Blender'>Blender</option>
                        <option value='Drink'>Drink</option>
                        <option value='Frying'>Frying</option>
                        <option value='Grilling'>Grilling</option>
                        <option value='Pressure Cooking'>Pressure Cooking</option>
                        <option value='Salad'>Salad</option>
                        <option value='Sandwich'>Sandwich</option>
                        <option value='Slow Cooking'>Slow Cooking</option>
                        <option value='Soups'>Soups</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='expanding_forms' onChange={this.handleIngredientChange}>
                    <label htmlFor='ingredients'>Ingredients</label>
                    {
                        ingredients.map((ingredient, index) => {
                            let ingredientNumber = `ingredient-${index}`
                            return (
                                <div key={index}>
                                    <label htmlFor={ingredientNumber}>{`Ingredient #${index + 1}`}</label><br />
                                    <input
                                        type="text"
                                        name={ingredientNumber}
                                        data-id={index}
                                        id={ingredientNumber}
                                        className="ingredient"
                                    />
                                </div>
                            )
                        })
                    }
                    <button type='button' className='addspace__button' onClick={this.addIngredient}>+ New Ingredient</button>
                </div>
                <div className='expanding_forms' onChange={this.handleDirectionChange}>
                    <label htmlFor='directions'>Directions</label>
                    {
                        directions.map((direction, index) => {
                            let directionNumber = `direction-${index}`
                            return (
                                <div key={index}>
                                    <label htmlFor={directionNumber}>{`Step #${index + 1}`}</label><br />
                                    <input
                                        type="text"
                                        name={directionNumber}
                                        data-id={index}
                                        id={directionNumber}
                                        className="direction"
                                    />
                                </div>
                            )
                        })
                    }
                    <button type='button' className='addspace__button' onClick={this.addDirection}>+ New Direction</button>
                </div>
                <div>
                    <label htmlFor='addtlnotes'>Additional Notes:</label>
                    <input type='text' name='addtlnotes' id='addtlnotes' onChange={e => this.handleNotesUpdate(e.target.value)} />
                </div>
                <button className='addrecipe__button' type='submit'>
                    Save
                    </button>
                <button className='canceladdrecipe__button' type='button' onClick={this.handleCancel}>
                    Cancel
                    </button>
            </form>
        )
    }
}


export default AddRecipe;