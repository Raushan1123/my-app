import React from "react";
import axios from "axios";

import NavLinks from "./components/navLink";

export default class PlanetList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      addToFav: false
    };
    this.list = [];
  }

  componentDidMount() {
    this.getList();
  }

  /* get users list */
  getList = async () => {
    const api =
      "https://assignment-machstatz.herokuapp.com/planet";

    await axios
      .get(api)
      .then(response => {
        this.list = response.data;
        this.setState({
          list: this.list
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let style = {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      padding: "1rem",
      gridGap: "1rem 1rem"
    };

    return (
      <div>
        <NavLinks />
        <ul style={style}>
          {this.state.list.map(user => {
            return (
              <li key={user.id}>
                {/* <div>
                  <img className="thumb" alt="" src={user._links.avatar.href} />
                </div> */}

                <div className="planetInfo">
                  <h3>
                    {user.name}
                  </h3>
                </div>
                <button onClick={() => this.props.clicked(user.name)}>
                  Add to Favorites
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

