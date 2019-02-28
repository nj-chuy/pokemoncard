import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Mycards from "./pages/mycards";
import NoMatch from "./pages/NoMatch";

import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyBhTYhTbeIU0F6nU5zP7cKA4N3pG61M7Qk",
  authDomain: "fir-auth-tutorial-6eb29.firebaseapp.com"
})


class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render() {
    return (

      <Router>
        <div>
          <header style={{ backgroundColor: "skyblue" }}>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mycards" component={Mycards} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>


      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div className=".container">
              <header style={{ backgroundColor: 'skyblue' }}>
              <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                <NavBar />
              </header>
              <div className="App-header">
                <BookSearch />
              </div>
            </div>
           
            {/* <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
          </span>
        ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>

    );
  }
}

export default App;
