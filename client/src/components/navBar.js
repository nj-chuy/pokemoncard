import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
          <div className="navbar-brand">
            PokeMon Card Game
          </div>
          <img src="https://images.pokemontcg.io/dp6/90_hires.png" alt="pokemon" style={{width: 50, height: 50}} />
        </nav>
      </div>
    );
  }
}

export default NavBar;
