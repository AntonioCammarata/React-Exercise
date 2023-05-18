import useCounterCallback from "./UseCounterCallback";

function CustomHook2() {
  const { counter, increment, decrement, reset } = useCounterCallback();

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default CustomHook2;
