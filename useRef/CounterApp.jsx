import { useRef, useState } from "react";

function App() {
  const style = {
    color: "red",
    textAlign: "center",
  };
  
  const [increment, setIncrement] = useState(0);
  const ref = useRef(0);
  
  function incrementData() {
    ref.current = ref.current + 1;
    setIncrement(ref.current);
  }
  
  function decrementData() {
    ref.current = ref.current - 1;
    setIncrement(ref.current);
    if (ref.current === 0) {
      alert("value can not be less than 0");
    }
  }
  
  const disableButton = ref.current === 0;
  
  return (
    <div style={{ textAlign: style.textAlign }}>
      <button onClick={incrementData}>Increment</button> <br />
      <h1 style={{ color: style.color }}>{increment}</h1>
      <button onClick={decrementData} disabled={disableButton}>
        Decrement
      </button>
    </div>
  );
}

export default App;
