import React from 'react';

const GutHubContext = React.createContext({
    user: [],
    recipes: [],
    buddies: [],

    handleLogin: ( ) => { },
    setUser: ( ) => { },
    updateUser: ( ) => { },


    addRecipe: ( ) => { },

    addCooklist: ( ) => { },
    updateCooklist: ( ) => { },
    deleteCooklist: ( ) => { },

    fetchError: null,
})

export default GutHubContext