import HOC from "./HOC";

function Parent({ objValue }) {
  const style = {
    textAlign: "center",
    color: "blue"
  };
  console.log(objValue);

  return (
    <div>
      <h1 style={style}>Higher Order function</h1>
      <hr />
      <h2>{objValue.name}</h2>
      <h3>{objValue.bio.role}</h3>
      <h4>{objValue.bio.from}</h4>
    </div>
  );
}

export default HOC(Parent);
