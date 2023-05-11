import React from "react";
import { useState } from "react";

function CounterClick() {
  const [counter, setCounter] = useState(0);
  const upCounter = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={upCounter}>
        Up
      </button>
    </div>
  );
}

export default CounterClick;