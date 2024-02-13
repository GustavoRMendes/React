import { useReducer } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { count: 0 };
    }
  }
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  function handleCount() {
    dispatch({ type: "increment" });
  }
  function subtract() {
    dispatch({ type: "decrement" });
  }
  function resetCount() {
    dispatch({ type: "reset" });
  }
  return (
    <>
      <h2>This count is {state.count}</h2>
      <button onClick={handleCount}> ➕ </button>
      <button onClick={subtract}> ➖ </button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
