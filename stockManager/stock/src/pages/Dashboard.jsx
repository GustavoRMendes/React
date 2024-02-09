import { useState } from "react"; 
import { Link } from "react-router-dom"
export default function Dashboard() {
  const [value] = useState(0)
  const [item] = useState('')
  return (
    <>
      <header>
        <nav>
          <div>REACT STOCK</div>
          <div className="links">
           <Link to='/'>Início</Link>
           <Link to='/items'>Itens</Link>
          </div>
        </nav>
        <h1>Dashboard</h1>
      </header>
      <main>
        <section className="boxes">
          <div className="box">
            Diversidade de Itens
            <span className="number">{value}</span>
          </div>
          <div className="box">
            Inventário total
            <span className="number">{value}</span>
          </div>
          <div className="box">
            Itens recentes
            <span className="number">{value}</span>
          </div>
          <div className="box">
            Itens acabando
            <span className="number">{value}</span>
          </div>
        </section>
        <section className="table">
          <div className="table1">
            <span>Itens Recentes</span>
            <span>Ações</span>
          </div>
          <div className="table2">
            <span>Itens Acabando </span>
            <span>Quantidade</span>
            <span>Ações</span>
          </div>
        </section>
        <section className="results">
          <div className="boxResult1">
            <span>{item}</span> <button className="viewButton">Ver</button>
          </div>
          <div className="boxResult2">
            <span>{item}</span> <span>{item}</span> 
            <button className="viewButton">Ver</button>
          </div>
        </section>
      </main>
    </>
  );
}
