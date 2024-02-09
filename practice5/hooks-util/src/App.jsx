import { useState, useEffect, useRef } from "react";

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

  //useRef
  const ref = useRef()
  function focu() {
    ref.current.focus()
  }
  return (
    <>
      
      <button onClick={() => setCounter((count) => (count += 1))}>
        Count is {counter}
      </button>
      <div>
        <input type="text" ref={ref} />
        <button onClick={focu}>Focus</button>
      </div>
    </>
  );
}
