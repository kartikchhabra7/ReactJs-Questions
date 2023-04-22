import React, { useState } from "react";

function App() {
    const [toggle,setToggle]=useState(false)

  return (
    <>
      <h1>ToggleButton</h1>
      <button onClick={()=>setToggle(!toggle)}>
            {toggle===true?'hide data ':'show data'}
        </button>

        {toggle && <h6>temp file</h6>}
    </>
  );
}

export default App;
