import { useState } from "react";
function getInitialValue(){
  console.log("devolvendo valor")
  return 1 + 1
}
export default function Counter() {
  const [count, setCount] = useState(() => getInitialValue());
  
  function handleClick() {
    setCount((count) => count + 1)
     }

  return {count,handleClick}
}