import { useReducer, useState } from "react";

export default function Form() {
  function reducer(state, action) {
    switch (action.type) {
      case "add-task":
        
        return {
          ...state,
          tasks: [...state.tasks, { name: action.payload , isCompleted: false }],
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
      />
      <button 
        onClick={() => dispatch({ type: "add-task", payload:inputValue })}>
        Adicionar
      </button>
      {state.tasks.map((task) => (
        <div key={Math.floor(Math.random() * 30000209091)}>
          <p>{task.name}</p>
        </div>
      ))}
    </>
  );
}
