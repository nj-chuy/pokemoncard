import React, { Component } from "react";
import BookSearch from "../components/bookSearch"
import "../App.css";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import NavBar from "../components/navBar";

firebase.initializeApp({
  apiKey: "AIzaSyBhTYhTbeIU0F6nU5zP7cKA4N3pG61M7Qk",
  authDomain: "fir-auth-tutorial-6eb29.firebaseapp.com"
})

class Home extends Component {
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
      this.setState({ 
        isSignedIn: !!user,
        userID: user.id
      })
      sessionStorage.setItem("userID",user.uid)
    })
  }

  render() {
      return (
        <div className="App">
            {this.state.isSignedIn ? (
            <span>
                <div className=".container">
                <header id="header">
                <div>Signed In!</div>
                <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                    <NavBar />
                </header>
                <div className="App-header">
                    <BookSearch />
                </div>
                </div>
            </span>
            ) : (
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
            )}
        </div>
      )

  };

}

export default Home;