import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mudei 😊");
  }, [count]);
  return (
    <>
      <h2>Hello React 😎</h2>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount((count) => (count += 1))}>Render </button>
      <Search />
    </>
  );
}

export default App;
