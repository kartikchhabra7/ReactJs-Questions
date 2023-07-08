import { useState } from "react";

function useFetchApi() {
  const [apiData, setApiData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  async function getApi() {
    try {
      const API_URL = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(API_URL);
      if (response.ok) {
        const result = await response.json();
        setApiData(result.slice(0, 10));
      } else {
        throw new Error("Failed to Fetch");
      }
    } catch (error) {
      console.log(error);
      setIsError(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3 * 1000);
    }
  }
  return {
    apiData,
    getApi,
    isError,
    isLoading,
  };
}

export default useFetchApi;
