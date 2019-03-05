import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Mycards from "./pages/mycards";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mycards" component={Mycards} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
      </Router>
    );
  }
}

export default App;
