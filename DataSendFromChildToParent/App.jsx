import Child from "./Child";
function App() {
  
  function receiveData(name) {
    console.log(`data recieve from parent file... ${name}`);
  }
  
  const style = {
    textAlign: "center",
  };
  
  return (
    <div>
      <h1 style={{ textAlign: style.textAlign }}>
        Data Sent From Child To Parent
      </h1>
      <br />
      <Child receiveData={receiveData} />
    </div>
  );
}

export default App;
