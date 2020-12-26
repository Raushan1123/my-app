import React from "react";

import NavLinks from "./components/navLink";

export default class FavoriteList extends React.Component {
  render() {
    const userLists = this.props.list.map(elem => {
      return <h2><li>{elem}</li></h2>;
    });
    return <ul>{userLists}</ul>;
  }
}
