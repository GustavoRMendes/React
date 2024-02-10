import { useState } from "react";

export default function App() {
  const [ count , setCount ] = useState(0);
  function handleCount(){
    setCount( count => count += 1);
  }

  return (
    <>
      <h1> useState() </h1>
      <div>
        <button onClick={handleCount}>
          Gustavo, você clicou no botão {count}! 
        </button>
      </div>
    </>
  )
}