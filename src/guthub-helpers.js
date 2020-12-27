// this function is for filtering out specific recipes by title from the recipe search list
export const findRecipes = (recipes = [], query) =>
  recipes.find(recipe => recipe.title === query)

// I was having some issues with users getting out of order in the databse when updating,
// this function keeps the users in order by ID number
export const orderUsers = users => (
    users.sort((a, b) => (a.id > b.id) ? 1 : -1)
)