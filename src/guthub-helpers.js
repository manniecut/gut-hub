export const findRecipes = (recipes = [], query) =>
  recipes.find(recipe => recipe.title === query)

export const orderUsers = users => (
    users.sort((a, b) => (a.id > b.id) ? 1 : -1)
)