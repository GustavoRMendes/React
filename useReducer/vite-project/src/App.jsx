import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); 
  const [text,setText] = useState(true)
  function handleClick(){
    setCount((count) => (count += 1))
    setText(!text)
  }
  return (
    <>
    <button onClick={handleClick}>
      This count is {count}
    </button>
    {text && <h2>useReducer</h2>}
    
    </>
  );
}

export default App;
