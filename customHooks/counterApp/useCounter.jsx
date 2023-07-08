import { useState } from "react";

function useCounter() {
  const [countValue, setCountValue] = useState(0);

  function incrementValue() {
    setCountValue(countValue + 1);
  }
  function decrementValue() {
    if (countValue < 1) {
      setCountValue(0);
    } else {
      setCountValue(countValue - 1);
    }
  }
  return {
    countValue,
    incrementValue,
    decrementValue
  };
}

export default useCounter;
