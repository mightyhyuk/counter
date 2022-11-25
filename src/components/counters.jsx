import React, { Component } from "react";
import Counter from "./counter";

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

export default Counters;
