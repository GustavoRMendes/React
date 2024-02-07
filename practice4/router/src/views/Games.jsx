import { Link } from 'react-router-dom'
import games from '../database.json'

export default function Games(){
  return (
    <>
      <h2>Todos os Jogos</h2>
      <p>Confira nossas ofertas para esse mês.</p>
      <section>
        <h3>Processadores</h3>
      </section>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h4>{game.name}</h4>
            <p>R$ {game.price}</p>
            <Link to={`/games/${game.id}`}>
            <button>Ver</button>
            </Link>
            <button>Compras</button>
          </li>
        ))}
      </ul>
   
    </>
  )
}