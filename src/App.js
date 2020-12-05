import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeScreen from './HomeScreen/HomeScreen';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';
import Buddies from './Buddies/Buddies';
import Recipe from './Recipes/Recipe/Recipe';
//import SavedCookLists from './CookLists/SavedCookLists/SavedCookLists';
//import Groceries from './Groceries/Groceries';
//import CookList from './CookLists/CookList/CookList';
import EditRecipe from './Recipes/EditRecipe/EditRecipe';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount/CreateAccount';
import AddRecipe from './Recipes/AddRecipe/AddRecipe';
import AddBuddy from './Buddies/AddBuddy/AddBuddy';
import MyRecipes from './MyRecipes/MyRecipes';
import GutHubTutorial from './GutHubTutorial/GutHubTutorial';

import GutHubContext from './GutHubContext';
import config from './config';
import './App.css';
import MessageCenter from './Buddies/MessageCenter/MessageCenter';

class App extends Component {
  state = {
    user: {
      username: '',
      userid: '',
    },
    recipes: [],
    buddies: [],
    loggedin: '',
  }


  /******** FETCH INTO STATE ON STARTUP ********/
  // initially fetch user's stuff

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/users`),
      fetch(`${config.API_ENDPOINT}/recipes`)
    ])
      .then(([usersRes, recipesRes]) => {
        if (!usersRes.ok)
          return usersRes.json().then(e => Promise.reject(e));
        if (!recipesRes.ok)
          return recipesRes.json().then(e => Promise.reject(e));
        return Promise.all([usersRes.json(), recipesRes.json()]);
      })
      .then(([users, recipes]) =>
        this.setState({
          users: users,
          recipes: recipes
        })
      )
      .catch(error => { alert('Unable to load information.') })
  };



  /******** CREATE/UPDATE/DELETE ********/


  /* Users */

  handleLogin = id => {
    console.log(id)
    this.setState({
      user: {
        userid: id
      },
      loggedin: true
    })
  };

  handleLogout = () => {
    this.setState({
      user: {
        username: '',
        userid: '',
      },
      loggedin: false
    })
  };

  setUser = (username, userId) => {
    this.setState({
      user: {
        username: username,
        userid: userId
      },
      loggedin: true
    })

  }

  handleAddUser = newUser => {
    this.setState({
      users: [...this.state.users, newUser]
    })
  }

 /* handleUpdateUser = updatedUser => {
    const newUsers = this.state.users.map(user =>
      (user.id === updatedUser.id)
        ? updatedUser
        : user
    )
    console.log(newUsers)
    this.setState({
      users: newUsers
    })
  }*/
  
  
  /* Recipe */

  handleAddRecipe = newRecipe => {
    this.setState({
      recipes: [...this.state.recipes, newRecipe]
    });
  };


  
  /* Messages *
  
  handleSendMessage()  // same as any previous Add function
  
  handleDeleteMessage()
  
  
  
  /******** RENDERING ********/


  /* Render Main */

  renderMainRoutes() {
    if (this.state.loggedin !== true) {
      return (
        <>
          <Route
            path="/(|search|myrecipes|cooklists|buddies)"
            component={Login} />
          <Route
            exact
            path="/createaccount/"
            component={CreateAccount} />
        </>

      )
    } else {
      return (
        <>
          <Route
            path="/login"
            component={Login} />
          <Route
            path="/createaccount"
            component={CreateAccount} />

          <Route
            exact
            path="/"
            component={HomeScreen} />
          <Route
            exact
            path="/search"
            component={Search} />
          <Route
            path="/buddies"
            component={Buddies} />
          <Route
            path="/myrecipes"
            component={MyRecipes} />
          <Route
            path="/messages"
            component={MessageCenter} />
          <Route
            path="/tutorial"
            component={GutHubTutorial} />

          <Route
            exact
            path="/recipes/:recipeid"
            component={Recipe} />
          <Route
            path="/add/recipe"
            component={AddRecipe} />
          <Route
            path="/edit/recipe/:recipeid"
            component={EditRecipe} />


          <Route
            path="/add/buddy"
            component={AddBuddy} />
        </>
      )
    }
  }



  /* App Render */

  render() {
    const value = {
      user: this.state.user,
      users: this.state.users,
      recipes: this.state.recipes,

      handleLogin: this.handleLogin,
      logout: this.handleLogout,
      setUser: this.setUser,
      addUser: this.handleAddUser,
      updateUser: this.handleUpdateUser,

      addRecipe: this.handleAddRecipe
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