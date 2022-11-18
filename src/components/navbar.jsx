import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Navbar{" "}
            <span className="badge rounded-pill text-bg-secondary">
              {this.props.totalCounters}
            </span>
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
