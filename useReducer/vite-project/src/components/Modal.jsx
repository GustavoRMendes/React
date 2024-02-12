// useReducer
// const [state,dispatch] = useReducer(reducer,initialArg,init?)
// function reducer (state,action)
// swicth (action.type)
// function click(){ dispatch({ type: 'action.type'})}

import { useReducer } from "react";
function Modal() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, age: state.age + 1 };
      default:
        return "Nothing";
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    age: 0,
  });
  function handleClick() {
    dispatch({ type: "increment" });
  }
  return (
    <div>
      <button onClick={handleClick}>You age is {state.age}</button>
    </div>
  );
}

export default Modal;
