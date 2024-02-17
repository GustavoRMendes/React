import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([
    { id: 0 , task: ''}
  ]);

  function addTask(  task : string) {
    const newList = [...list]
    if (task.length > 0 ){
      newList.push (
        {
          id: list.length + 1,
          task: task
        })
      setList(newList) 
      setInputValue('')
      console.log(newList)
    }
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
      />

      <button onClick={() => addTask(inputValue)}>Adicionar</button>

      {list.length > 0 ? (
        list.map((item) => <div key={item.id}> <p>{item.task}</p> </div>)
      ) : (
        <h2> Lista vazia...</h2>
      )}
    </>
  );
}
