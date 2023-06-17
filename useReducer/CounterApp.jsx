import { useReducer } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "Add":
        return state + 1;
      case "Remove":
        if (state > 0) {
          return state - 1;
        } else {
          state === 0;
        }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <br />

      <button onClick={() => dispatch({ type: "Add" })}>➕</button>
      <br />
      <h1> {state}</h1>
      <button onClick={() => dispatch({ type: "Remove" })}>➖</button>
    </>
  );
}

export default App;
