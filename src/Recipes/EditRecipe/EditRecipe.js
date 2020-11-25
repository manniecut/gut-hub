import React, { Component } from 'react';

class EditRecipe extends Component {

    render() {
        return (
            <>
                <form class='search__form'>

                    <div>
                        <label for='title'>Edit Recipe</label>
                        <input type='text' name='title' id='title' placeholder='Simple Salad' required />
                    </div>
                    <div>
                        <label for='folder'>Select Cooking Method:</label>
                        <select id='folder' name='folder'>
                            <option>Salad</option>
                            <option>Frying</option>
                            <option>Baking</option>
                        </select>
                    </div>
                    <div>
                        <label for='ingredients'>Ingredients</label>
                        <textarea name='ingredients' id='ingredients' placeholder='filled with ingredients from recipe'
                            required></textarea>

                    </div>
                    <div>
                        <label for='directions'>Directions</label>
                        <textarea name='directions' id='directions' placeholder='filled with directions from recipe'
                            required></textarea>

                    </div>
                    <div className='AddNote__buttons'>
                        <button type='button'>
                            Cancel
    </button>
                        <button type='submit'>
                            Save
    </button>
                    </div>
                </form>
            </>
        )
    }
}

export default EditRecipe;