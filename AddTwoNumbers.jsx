import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [values, setValues] = useState("");
  const [total, setTotal] = useState(0);

  function handle(e) {
    setValue(e.target.value);
  }
  function handles(e) {
    setValues(e.target.value);
  }

  function add() {
    const sum = parseInt(value) + parseInt(values);    //setTotal((+value) + (+values))
    setTotal(sum);

    setValue("");
    setValues("");
  }
  return (
    <>
      <h1>Add Two Numbers</h1>
      <input type="number" value={value} onChange={handle} />
      <br />
      <input type="number" value={values} onChange={handles} />
      <br />
      <button onClick={add}>Total </button> <span>: {total}</span>
    </>
  );
}

export default App;

/*Add Two Numbers */
