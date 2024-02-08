import { Link, useLoaderData } from "react-router-dom";
export default function Game(){
  const game = useLoaderData()

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