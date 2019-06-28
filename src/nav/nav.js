import React, { Component } from "react";
import "./nav.css";
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="https://fullthrottlelabs.com/img/logo/logo-2.png"
            width="80"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          <b>FullThrottle Labs</b>
        </a>
      </nav>
    );
  }
}

export default Nav;
