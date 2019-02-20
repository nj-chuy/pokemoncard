import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
          <a className="navbar-brand">
            PokeMon Card Game
          </a>
          <img src="https://images.pokemontcg.io/dp6/90_hires.png" alt="" style={{width: 50, height: 50}} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
