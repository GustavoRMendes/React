import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  function handleSetTask() {
    console.log(task);
    setTask("");
  }
  return (
    <>
      <label htmlFor="task">Tarefa: </label>
      <input
        type="text"
        id="task"
        value={task}
        onChange={(ev) => setTask(ev.target.value)}
      />
      <button onClick={handleSetTask}>Salvar</button>
    </>
  );
}
