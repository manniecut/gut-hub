/*
placeholder for some modular functions that might be used

example

export const findFolder = (folders = [], folderid) =>
  folders.find(folder => folder.id === folderid)



export const getResultsForSearch = (results = [], query) => (
  (!folder_id)
    ? results
    : results.filter(result => result.query === query)
)

*/

export const findRecipes = (recipes = [], query) =>
  recipes.find(recipe => recipe.title === query)