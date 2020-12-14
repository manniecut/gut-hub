import React, { Component } from 'react';

class AddRecipe extends Component {

    state = {
        title: [],
        ingredients: [],
        directions: []
    }

    handleIngredientChange = (e) => {
        if ("ingredient".includes(e.target.className)) {
            let ingredients = [...this.state.ingredients]
            ingredients[e.target.dataset.id] = e.target.value
            this.setState({ ingredients }, () => console.log(this.state))
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
            this.setState({ directions }, () => console.log(this.state))
        } else {
            this.setState({
                directions: [e.target.value]
            })
        }
    }

    addIngredient = (e) => {
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, { ingredient: "" }]
        }))
    }

    addDirection = (e) => {
        this.setState((prevState) => ({
            directions: [...prevState.directions, { direction: "" }]
        }))
    }

    handleSubmit = (e) => { e.preventDefault() }


    render() {
        let { ingredients, directions } = this.state
        return (
            <form className='add__recipe__form' onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='title'><h3>New Recipe</h3></label>
                    <input type='text' name='title' id='title' required />
                </div>
                <div>
                    <label htmlFor='quickdesc'><h4>Quick Description:</h4></label>
                    <input type='text' name='quickdesc' id='quickdesc' />
                </div>
                <div>
                    <label htmlFor='recipetype'><h4>Select Recipe Type:</h4></label>
                    <select id='recipetype' name='recipetype'>
                        <option>Baking</option>
                        <option>Blender</option>
                        <option>Drink</option>
                        <option>Frying</option>
                        <option>Grilling</option>
                        <option>Pressure Cooking</option>
                        <option>Salad</option>
                        <option>Sandwich</option>
                        <option>Slow Cooking</option>
                        <option>Soups</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className='expanding_forms' onChange={this.handleIngredientChange}>
                    <label htmlFor='ingredients'><h4>Ingredients</h4></label>
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
                    <button className='addrecipe__button' onClick={this.addIngredient}>+ New Ingredient</button>
                </div>
                <div className='expanding_forms' onChange={this.handleDirectionChange}>
                    <label htmlFor='directions'><h4>Directions</h4></label>
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
                    <button className='addrecipe__button' onClick={this.addDirection}>+ New Direction</button>
                </div>
                <div>
                    <label htmlFor='addtlnotes'><h4>Additional Notes:</h4></label>
                    <input type='text' name='addtlnotes' id='addtlnotes' />
                </div>
                <button className='addrecipe__button' type='submit'>
                    Save
                    </button>
                <button className='addrecipe__button' type='button'>
                    Cancel
                    </button>
            </form>
        )
    }
}


export default AddRecipe;