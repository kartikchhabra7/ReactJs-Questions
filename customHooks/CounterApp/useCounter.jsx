import { useCallback } from "react";
import useCounter from "./useCounter";

function App() {
  const style = {
    textAlign: "center",
    color: "blue",
  };

  const counterApp = useCounter();

  const increment = useCallback(() => {
    counterApp.incrementValue();
  }, [counterApp]);

  const decrement = useCallback(() => {
    counterApp.decrementValue();
  }, [counterApp]);
  return (
    <>
      <h1 style={{ textAlign: style.textAlign }}>
        CounterApp with Custom Hooks
      </h1>
      <hr />
      <button onClick={increment}>+</button> <br />
      <h1 style={{ color: style.color }}>{counterApp.countValue}</h1>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
