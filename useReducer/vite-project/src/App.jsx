// useReducer
// const [state,dispatch] = useReducer(reducer,initialArg,init?)
// function reducer (state,action) 
// swicth (action.type)
// function click(){ dispatch({ type: 'action.type'})}

import { useReducer } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "Increment":
        return { ...state, count: state.count + 1 };
      case "text":
        return { ...state, text: !state.text };
      default:
        return "Nothing";
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: true,
  });
  function handleClick() {
    dispatch({ type: "Increment" });
    dispatch({ type: "text" });
  }
  return (
    <>
      <button onClick={handleClick}>This count is {state.count}</button>
      {state.text && <h2>useReducer</h2>}
    </>
  );
}

export default App;
