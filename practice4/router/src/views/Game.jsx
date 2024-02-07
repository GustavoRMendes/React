import { Link, useParams } from "react-router-dom";
import games from '../database.json'
export default function Game(){
  const { gameId } = useParams()
  const game = games.find(g => g.id === +gameId)
  if(!game){
    return <h2>Produto não encontrado</h2>
  }
  return (
    <>
      <section>
        <Link to='/games'><button>Voltar</button></Link>
        <h2>{game.name}</h2>
        <h2> {game.description}</h2>
        <h2>R$ {game.price}</h2>
        <button>Comprar</button>
      </section>
    </>
  )
}