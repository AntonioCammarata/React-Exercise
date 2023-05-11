import { useEffect, useState } from "react";

const ClickCounterEffect = (props) => {
  const [count, setCount] = useState(0);

  const handleCounter = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    props.onCounterChange(count);
  }, [count]);

  return (
    <div>
      <button onClick={handleCounter}>Send</button>
      <h1>{count}</h1>
    </div>
  );
};
export default ClickCounterEffect;
