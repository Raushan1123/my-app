import React, { Component } from "react";

import PlanetList from "./planetList";
import FavoriteList from "./favoriteList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    favorites: []
  };
  addToFav = id => {
    console.log(id);
    this.setState({
      favorites: this.state.favorites.concat(id)
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <PlanetList
              favorites={this.state.favorites}
              clicked={this.addToFav}
            />
          </Route>
          <Route path="/favorites">
            <FavoriteList list={this.state.favorites} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
