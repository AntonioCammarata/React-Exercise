import { useState } from "react";
import ClickCounterEffect from "./SideEffect";

function CounterEffect(props) {
  const [count, setCount] = useState(0);

  function Increment() {
    setInterval(() => {
      setCount(count + props.incrementAmount);
    }, props.incrementIntervall);
  }

  return (
    <>
      <ClickCounterEffect />
      <button onClick={Increment}>Up</button>
    </>
  );
}

export default CounterEffect;
