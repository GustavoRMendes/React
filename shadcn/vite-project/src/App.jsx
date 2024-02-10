import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [valueInput, setValueInput] = useState("");

  function handleCount() {
    setCount((count) => (count += 1));
  }

  return (
    <>
      <h1> useState() </h1>
      <div>
        <label htmlFor="name">Nome: </label>
        <input
          type="text"
          id="name"
          onChange={(ev) => setValueInput(ev.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <br />
      <div>
        <button onClick={handleCount}>
          {valueInput}, você clicou no botão {count}!
        </button>
      </div>
    </>
  );
}
