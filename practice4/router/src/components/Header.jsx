import { Link } from "react-router-dom"

export default function Header(){
  return (
    <>
       <header>
          <nav style={{display:'flex',gap:'2rem'}}>
            <Link to='/'>Início</Link>
            <Link to='/games'>Jogos</Link>
            <Link to='/cart'>Carrinho</Link>
          </nav>
        </header>
    </>
  )
}