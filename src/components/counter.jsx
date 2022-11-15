import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <span className="badge text-bg-primary m-2">{this.formatCount()}</span>
        <button type="button" className="btn btn-secondary btn-sm">
          Increment
        </button>
      </>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
