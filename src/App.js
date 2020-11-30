import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeScreen from './HomeScreen/HomeScreen';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Buddies from './Buddies/Buddies';
import Recipe from './Recipes/Recipe/Recipe';
import SavedCookLists from './CookLists/SavedCookLists/SavedCookLists';
import Groceries from './Groceries/Groceries';
import CookList from './CookLists/CookList/CookList';
import EditRecipe from './Recipes/EditRecipe/EditRecipe';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount/CreateAccount';
import AddRecipe from './Recipes/AddRecipe/AddRecipe';
import AddBuddy from './Buddies/AddBuddy/AddBuddy';
import GutHubTutorial from './GutHubTutorial/GutHubTutorial';

import GutHubContext from './GutHubContext';
import config from './config';
import './App.css';

class App extends Component {
  state = {
    user: {
      username: '',
      userid: null,
    },
    recipes: [],
    buddies: [],
    loggedin: '',
  }


  /******** FETCH INTO STATE ON STARTUP ********/
  // initially fetch user's stuff

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/users/`)
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(users =>
        this.setState({
          users: users
        })
      )
      .catch(error => { alert('Unable to get users.') })
  };




  /******** CREATE/UPDATE/DELETE ********/

  /* Users */

  handleLogin = (username) => {
    this.setState({
      user: {
        username: 'Guest',
        userid: 4,
      },
      loggedin: true
    })
  };

  handleLogout = () => {
    this.setState({
      loggedin: false
    })
  };




  /*handleAddUser()
  
  handleUpdateUser()
  
  handleDeleteUser()
  
  
  
  /* Recipe *
  
  handleAddRecipe()
  
  handleUpdateRecipe()
  
  handleDeleteRecipe()
  
  
  /* Cooklists *
  
  handleAddCooklist()
  
  handleUpdateCooklist()
  
  handleDeleteCooklist()
  
  
  /* Messages *
  // send will be same as add
  
  handleSendMessage()
  
  handleDeleteMessage()
  
  
  
  /******** RENDERING ********/


  /* Render Main */

  renderMainRoutes() {
    //home screen, recipes/search, saved lists, buddies, shopping list

    //recipe will become recipe/:recipeid

    if (this.state.loggedin !== true) {
      return (
        <>
          <Route
            path="/"
            component={Login} />
        </>
      )
    } else {
      return (
        <>
          <Route
            exact
            path="/"
            component={HomeScreen} />
          <Route
            exact
            path="/recipes"
            component={Search} />
          <Route
            path="/cooklists"
            component={SavedCookLists} />
          <Route
            path="/buddies"
            component={Buddies} />
          <Route
            path="/groceries"
            component={Groceries} />
          <Route
            path="/tutorial"
            component={GutHubTutorial} />

          <Route
            exact
            path="/recipes/:recipeid"
            component={Recipe} />

          <Route
            path="/edit/recipe"
            component={EditRecipe} />
          <Route
            path="/cooklist"
            component={CookList} />

          <Route
            path="/login"
            component={Login} />
          <Route
            path="/createaccount"
            component={CreateAccount} />

          <Route
            path="/add/recipe"
            component={AddRecipe} />
          <Route
            path="/add/buddy"
            component={AddBuddy} />
        </>
      )
    }
  }


  /* App Render */

  // If state.loggedin is false, show login screen, else

  // Will have to render login screen first,
  // then pass user data to state and update loggedin.
  // then
  // Do in componentDidMount?
  // componentDidMount might also fetch all users

  // also could be able to browse without being logged in but have a button to log in


  render() {
    const value = {
      user: this.state.user,
      users: this.state.users,

      login: this.handleLogin,
      logout: this.handleLogout
    }

    return (
      <GutHubContext.Provider value={value}>
        <div className='App' >
          <Navbar />
          <main className="App__main">{this.renderMainRoutes()}</main>
        </div>
      </GutHubContext.Provider>

    );
  };
}


export default App;