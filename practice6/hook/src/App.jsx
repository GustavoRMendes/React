import { useEffect, useState, useRef, useReducer } from "react";
import Form from "./components/Form";

export default function App() {
  const [resource, setResource] = useState("posts");
  const [prev, setPrev] = useState({ count: 0 });
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const renders = useRef(-1);
  const htmlReferencie = useRef();
  const lastRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
  });
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, counter: state.counter + 1 };
      case "decrement":
        if (state.counter > 0) {
          return { ...state, counter: state.counter - 1 };
        }
        return state;
    }
  }
  function decrementCounter() {
    dispatch({ type: "decrement" });
  }
  function incrementCounter() {
    dispatch({ type: "increment" });
  }
  const focusInput = () => {
    htmlReferencie.current.focus();
  };
  function handle() {
    setPrev((prevState) => ({ ...prevState, count: prev.count + 1 }));
  }
  useEffect(() => {
    lastRef.current = name;
  }, [name]);
  useEffect(() => {
    const responseFetch = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      if (!response.ok) {
        throw new Response("Error");
      }
      const responseJSON = await response.json();
      setItems(responseJSON);
    };

    responseFetch();
  }, [resource]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });
  return (
    <>
      <Form />
      <hr />
      <h3>Count is {prev.count}</h3>
      <button onClick={handle}>Clique</button>
      <h2>Resource is {resource}</h2>
      <button onClick={() => setResource("posts")}>posts</button>
      <button onClick={() => setResource("comments")}>comments</button>
      <button onClick={() => setResource("todos")}>todos</button>
      <hr />
      <h2>UseReducer</h2>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <h3>This age is {state.counter}</h3>
      <hr />
      <div>
        <input
          ref={htmlReferencie}
          type="text"
          onChange={(ev) => setName(ev.target.value)}
        />
        <h2>Hello, my name is {name} </h2>
        <p>useRef: {lastRef.current}</p>
        <h3>Renders: {renders.current}</h3>
        <button onClick={focusInput}>Focar no input</button>
      </div>
      <hr />

      {items.map((item) => (
        <div key={Math.floor(Math.random() * 10000000)}>
          <p>{item.id}</p>
        </div>
      ))}
    </>
  );
}
