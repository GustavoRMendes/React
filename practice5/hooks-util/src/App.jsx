import { useState, useEffect } from "react";

export default function App() {
  // useState
  const [counter, setCounter] = useState(0);

  // useEffect
  useEffect(() => {
    console.log('oiii')
    return () => {
      console.log('componentWillUnmount')
    }
  },[counter]);

  return (
    <>
      
      <button onClick={() => setCounter((count) => (count += 1))}>
        Count is {counter}
      </button>
    </>
  );
}
