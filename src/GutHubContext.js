import React from 'react';

const GutHubContext = React.createContext({
    /* not final */
    user: [],
    recipes: [],
    lists: [],
    buddies: [],

    handleLogin: ( ) => { },


    addRecipe: ( ) => { },

    addCooklist: ( ) => { },
    updateCooklist: ( ) => { },
    deleteCooklist: ( ) => { },

    sendMessage: ( ) => { },
    deleteMessage: ( ) => { },
    
    fetchError: null,
})

export default GutHubContext