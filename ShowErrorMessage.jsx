import React, { useState } from "react";

function App() {
  const [age, setAge] = useState("");
  const [err, setErr] = useState(false);

  function eventHandlet(event) {
    let item = event.target.value;
    if (item < 18) {
      setErr(true);
    } else {
      setErr(false);
    }
    setAge(item);
  }
  return (
    <>
      <h1>Show error Message</h1>
      <hr />

      <input
        type="number"
        value={age}
        onChange={eventHandlet}
        placeholder="enter age"
      />

      <br />

      {err && <h2>Age must be 18 or greater</h2>}
    </>
  );
}

export default App;
