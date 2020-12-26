import React, { Component } from "react";
import './App.css'

import { Link } from "react-router-dom";

export default class NavLinks extends Component {
  render() {
      
    return (
      <nav>
        <Link to={"/"} onClick={() => this.forceUpdate()}>
          <button style={{textAlign:"center"}} className="button">Home</button>
        </Link>
        <Link to={"/favorites"} onClick={() => this.forceUpdate()}>
          <button style={{textAlign:"center" }} className="button">Favorites</button>
        </Link>
      </nav>
    );
  }
}
