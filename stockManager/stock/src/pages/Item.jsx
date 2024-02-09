import { Link } from "react-router-dom";

export default function Item(){
  return (
    <>
        <header>
        <nav>
          <div>REACT STOCK</div>
          <div className="links">
            <Link to="/">Início</Link>
            <Link to="/items">Items</Link>
          </div>
        </nav>
        <h1>Stock Items</h1>
      </header>
      <main>
        <section className="linksItems">
          <Link to="/items">Todos os Items</Link>
          <Link to="/novoItem">Novo Item</Link>
        </section>
        <hr />
        <section className="view">
          <span>7 Wonders</span>
          <button className="white">Atualizar</button>
          <button className="red">Excluir</button>
        </section>
        <section className="flex">
          <div>
            <span>Categoria: Jogos</span>
            <span>Quantidade em Estoque: 8</span>
            <span>Preço: R$ 399.99</span>
          </div>
          <br />
          <p>Jogo de Tabuleiro para vários jogadores</p>
          <p>Cadastrado em: 08-02-2024</p>
          <p>Atualizado em: Fri Jun 16 2023</p>
        </section>
        </main>
    </>
  )
}