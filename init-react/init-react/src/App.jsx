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
  function handleOk(id){
    const searchId = tasks.findIndex(item => item.id === id)
    if(searchId === -1){
      return;
    }
    const newTasks = [...tasks]
    newTasks[searchId].isCompleted =  true
    setTasks(newTasks)
    
  }
  return (
    <>
      <code>Hello React!</code> <br />
      <code>Eu amo codar ❤️ </code>
      <hr />
      <main>
        <h1>To-Do App</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleAddTask}>Add</button> <br />

        {tasks.length > 0 &&
          tasks.map((item) => <Task key={item.id} task={item} handleAddOk={handleOk} />)}
        {!tasks.length && <h2>Lista vazia 🧐</h2>}
      </main>
    </>
  );
};

export default App;
