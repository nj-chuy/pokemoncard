import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
          <header className="animated bounceInDown" id="title">Pokemon Card Game</header>
        </nav>
      </div>
    );
  }
}

export default NavBar;
