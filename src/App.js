/* To Do:
  login system
  state

  fill in crud functions



*/

import React, { Component } from 'react';

class App extends Component {
  state = {
    user: [],
    /* still planning */
    loggedin: false,
  }


  /******** FETCH INTO STATE ON STARTUP ********/
  // initially fetch user's stuff

  componentDidMount() {
    userId = this.state.user.id;
    Promise.all([
      fetch(`${config.API_ENDPOINT}/users/${userId}`),
    ])
      .then(/* check */)
      .then(/* set state */)
      .catch(error => {
        this.setState({ error })
      });

  }


  /******** CREATE/UPDATE/DELETE ********/

  /* Users */

  handleAddUser()

  handleUpdateUser()

  handleDeleteUser()



  /* Recipe */

  handleAddRecipe()

  handleUpdateRecipe()

  handleDeleteRecipe()


  /* Cooklists */

  handleAddCooklist()

  handleUpdateCooklist()

  handleDeleteCooklist()


  /* Messages */
  // send will be same as add

  handleSendMessage()

  handleDeleteMessage()



  /******** RENDERING ********/


  /* Render Navigation */

  // this might not need to be so complicated since nav won't change like noteful
  // but don't forget error component

  renderNavRoutes() {
    // when in home screen, render only logout
    // else render same as main routes, minus home screen
    return (
      <>
      </>
    )
  }


  /* Render Main */

  renderMainRoutes() {
    //home screen, recipes/search, saved lists, buddies, shopping list
    return (
      <>
      </>
    )
  }



  /* App Render */

  // If state.loggedin is false, show login screen, else

  // Will have to render login screen first,
  // then pass user data to state and update loggedin.
  // then
  // Do in componentDidMount?
  // componentDidMount might also fetch all users


  render() {
    //for context
    const value = {

      /*state and functions*/

    };
    return (

      <div className='App' >
        <nav className="App__nav">{this.renderNavRoutes()}</nav>
        <header className="App__header">
          <h1>
            <Link to='/'>GutHub</Link>
          </h1>
        </header>
        <main className="App__main">{this.renderMainRoutes()}</main>
      </div>

    );
  }
}


export default App;