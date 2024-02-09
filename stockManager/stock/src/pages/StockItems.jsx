import { Link, useLocation } from "react-router-dom";

export default function StockItems() {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <nav>
          <div>REACT STOCK</div>
          <div className="links">
            <Link to="/">Início</Link>
            <Link to="/items">Itens</Link>
          </div>
        </nav>
        <h1>Stock Itens</h1>
      </header>
      <main>
        <section className="linksItems">

          <Link to="/items" className={pathname === "/items" ? "active" : ""}>
            Todos os Itens
          </Link>
          <Link to="/novoItem">
            Novo Item
          </Link>
        </section>
        <hr />
        <section>
          <table className="tableItems">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>EM ESTOQUE</th>
                <th>CATEGORIA</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>39930923</td>
                <td>7 Wonders</td>
                <td>8 unid.</td>
                <td>Jogos</td>
                <td>
                  <Link to="/items/:itemId">
                    <button className="blue">Ver</button>
                  </Link>
                  <button className="white">Atualizar</button>
                  <button className="red">Excluir</button>
                </td>
              </tr>
              <tr>
                <td>2998998</td>
                <td>Pequeno Príncipe</td>
                <td>32 unid.</td>
                <td>Livros</td>
                <td className="actions">
                  <Link to="/items/:itemId">
                    <button className="blue">Ver</button>
                  </Link>
                  <button className="white">Atualizar</button>
                  <button className="red">Excluir</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}
