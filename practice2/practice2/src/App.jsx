import { useState, useEffect } from "react"
import Read from "./Read";
const jogos = [
  {title:'Fifa 15',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjIut5ceZy7o-_jDHTKlNkDM1KH_5H52UE8vR9T_1-yjhjiru8wy1EVutXP264qWWkq4&usqp=CAU',id:1},
  {title:'Homem Aranha',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpGKUjBvAivmMF0nMjisJ2EF05x1Ef5kEaYZxi2Jfa85tshf6ZMjLgPfdGe1SHrktt94&usqp=CAU',id:2}
]
export default function App(){
  const [counter,setCounter] = useState(0)
  useEffect(() => {
    alert("Testando")
    
    // Função da Limpeza
    return () => {
      console.log('Fazendo Limpeza.')
      console.log('Componente desmontado')
    }
    // Array de dependência 
    // Se não tiver, o efeito é ativado em qualquer mudança
  }, [counter]);

  const listGames = jogos.map(game =>
  <div key={game.id}>
    <h2>{game.title}</h2>
    <img src={game.img} alt={game.title} />
  </div>)
  
  return (
    <>
    <div>
        <button
        onClick={() => setCounter((count) => count += 1)}
        >
          O contador é {counter}
        </button>
    </div>
     <div>
      {listGames}
    </div>
    <div>
      <Read/>
    </div>
    </>
  )
}