import { useRef, useState } from "react";
import Task from "./components/Task";

const data = [];

const App = () => {
  const inputRef = useRef(null)
  const [tasks,setTasks] = useState(data)

  function handleAddTask(){
    const newTask = {
      id: tasks.length + 1,
      title: inputRef.current.value,
      isCompleted: false
    }
    setTasks([...tasks,newTask])
    inputRef.current.value = ''
  }
  return (
    <>
      <code>Hello React!</code> <br />
      <code>Eu amo codar ❤️ </code>
      <hr />
      <main>
        <h1>To-Do App</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleAddTask}>Add</button>

        {tasks.length > 0 &&
          tasks.map((item) => <Task key={item.id} task={item} />)}
        {!tasks.length && <h2>Lista vazia 🧐</h2>}
      </main>
    </>
  );
};

export default App;
