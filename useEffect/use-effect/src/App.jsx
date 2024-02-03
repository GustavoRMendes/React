import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert("Chamando a API");

    return () => {
      alert("Chamada Cancelada!");
    };
    
  }, []);

  return (
    <button onClick={() => setCounter((count) => (count += 1))}>
      Contador: {counter}
    </button>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <h2>Use Effect</h2>
      <div>
        <input
          type="checkbox"
          id="show"
          value={show}
          onChange={() => setShow((state) => !state)}
        />
        <label htmlFor="show">Exibir</label>
      </div>
      {show ? <Counter /> : null}
    </>
  );
}
