import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookSearch from "./components/bookSearch";
import NavBar from "./components/navBar";

class App extends Component {
  render() {
    return (
      <div className=".container">
        <header style={{backgroundColor: 'skyblue'}}>
          <NavBar />
        </header>
        <div className = "App-header">
          <BookSearch />
        </div>
      </div>
    );
  }
}

export default App;
