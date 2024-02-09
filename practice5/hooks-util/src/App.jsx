import { useState } from "react";

export default function App() {
  // useState
  const [counter, setCounter] = useState(0);

  return (
    <>
      
      <button onClick={() => setCounter((count) => (count += 1))}>
        Count is {counter}
      </button>
    </>
  );
}
