/* eslint-disable no-unused-vars */
import {  useState } from "react"
async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const data = await response.json()
  return data.results
}
export default function App() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonShown,setPokemonShown] = useState(null)
  // As vezes não precisamos do useEffect()
  if(pokemon.length === 0 ){
      fetchPokemon().then(result => {
        console.log("Requisição realizada")
        console.log(result)
        setPokemon(result)
      })
    }
  
    const showDetails = async (url) => {
      const data = await fetch(url).then(res => res.json())
      console.log('Pokémon encontrado')
      console.log(data)
      setPokemonShown(data)
    }
  return (
    <div className="app">
      <div>
        <h2>Pokémon</h2>
        <ul className="pokemon">
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button onClick={() => showDetails(mon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


