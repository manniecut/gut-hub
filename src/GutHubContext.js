import React from 'react';

const GutHubContext = React.createContext({
    user: [],
    recipes: [],
    buddies: [],

    handleLogin: ( ) => { },
    setUser: ( ) => { },
    updateUser: ( ) => { },

    addRecipe: ( ) => { },
    
})

export default GutHubContext