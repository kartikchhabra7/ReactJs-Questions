import { useState } from "react";

function Child({ receiveData }) {
  
  const [data, setData] = useState("");
  function submitData(e) {
    e.preventDefault();
    receiveData(data);
    setData("");
  }

  return (
    <div>
      <form onSubmit={submitData}>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Data sending from child"
        />

        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default Child;
