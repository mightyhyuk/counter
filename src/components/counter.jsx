import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>
              {this.getBadgeValue()}
            </span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.handleIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.handleDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
              disabled={this.props.counter.value === 0}
            >
              -
            </button>
            <button
              onClick={() => this.props.handleDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getBadgeValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
