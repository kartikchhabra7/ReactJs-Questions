import React, { useState } from "react";

function Practice() {
  const [data, setData] = useState("");
  const disabled = data.length < 5;
  return (
    <>
      <h1>Custom Disable Button</h1>

      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <br />
      <button
        type="submit"
        disabled={disabled}
        onClick={() => alert(data, setData(""))}
      >
        Click
      </button>
      <br />
      {data === ""
        ? null
        : disabled && <b>Name should be more than 4 character</b>}
    </>
  );
}

export default Practice;
