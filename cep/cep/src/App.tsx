import { useEffect, useState } from "react";
export default function App() {
  const [list, setList] = useState([""]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(`https://viacep.com.br/ws/76824436/json`);
      if (!response.ok) {
        throw new Response("Not found!");
      }
      const result = await response.json();
      setList(result.localidade);
    };
    fetchApi(), [];
  });

  return <>cidade: {list}</>;
}
