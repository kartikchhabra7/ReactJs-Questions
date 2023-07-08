import { useEffect } from "react";
import useFetchApi from "./useFetchApi";

function App() {
  const fetchApi = useFetchApi();
  const style = {
    textAlign: "center",
    color: "#CC0000"
  };

  useEffect(() => {
    fetchApi.getApi();
  }, []);

  if (fetchApi.isError) {
    return (
      <div>
        <h1>
          {fetchApi.isError.name} - {fetchApi.isError.message}
        </h1>
        <strong style={{ color: style.color }}>
          Please check your apiEndPoints...
        </strong>
      </div>
    );
  }

  if (fetchApi.isLoading) {
    return (
      <div>
        <h1>Loading Please wait...</h1>
      </div>
    );
  }
  return (
    <>
      <h1 style={{ textAlign: style.textAlign }}>FetchApi with Custom Hooks</h1>
      <hr />
      {fetchApi.apiData.map((value) => {
        return <div key={value.id}>{value.id}</div>;
      })}
    </>
  );
}

export default App;
