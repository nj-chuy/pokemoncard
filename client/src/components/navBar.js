import React, { Component } from "react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
          <a className="navbar-brand"></a>
          <header class="animated bounceInDown" id="title">Pokemon Card Game</header>
          {/* <img src="https://images.pokemontcg.io/dp6/90_hires.png" alt="pokemon" style={{width: 50, height: 50}} /> */}
        </nav>
      </div>
    );
  }
}

export default NavBar;
