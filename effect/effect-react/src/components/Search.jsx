import { useEffect } from "react";

async function fetchApi() {
  const response = await fetch("https://api.github.com/users/GustavoRMendes");
  if(!response.ok){
    throw new Response('Nothing')
  }
  const data = await response.json();
  return data.bio;
}
function Search() {
  useEffect(() => {
    fetchApi().then((result) => console.log(result));
  }, []);
}

export default Search;
