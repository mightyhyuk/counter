import React, { Component } from "react";
import Counter from "./counter";
import PropTypes from "prop-types";

class Counters extends Component {
  render() {
    const {
      handleReset,
      counters,
      handleDelete,
      handleIncrement,
      handleDecrement,
    } = this.props;

    return (
      <>
        <button onClick={handleReset} className="btn btn-info">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            handleDelete={handleDelete}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

Counters.propTypes = {
  handleReset: PropTypes.func,
  counters: PropTypes.array,
  handleDelete: PropTypes.func,
  handleIncrement: PropTypes.func,
  handleDecrement: PropTypes.func,
};

export default Counters;
