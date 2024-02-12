async function fetchPokemon(){
  const reponse = await fetch('https://pokeapi.co/api/v2/pokemon')
  const data = await reponse.json()
  const newArr = data.results
  const list = newArr.map((item) => item.name)
  return list
}
function App () {
  const newArray = fetchPokemon()
  newArray.then(result => console.log(result))
  
}

export default App;
