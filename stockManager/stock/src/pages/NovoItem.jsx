import { Link, useLocation } from "react-router-dom";

export default function NovoItem() {
  const { pathname } = useLocation()
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
          <Link to="/items">Todos os Itens</Link>
          <Link to="/novoItem" className={pathname === "/novoItem" ? "active" : ""}>Novo Item</Link>
        </section>
        <hr />
        <section>
          <form className="form">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" required />
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              placeholder="0"
              required
              step={1}
              id="quantity"
            />
            <label htmlFor="price">Preço:</label>
            <input type="number" id="price" placeholder="0" required />
            <label htmlFor="category">Categoria:</label>
            <select id="category" required>
              <option disabled selected>
                Selecione uma categoria
              </option>
              <option value="books">Livros</option>
              <option value="games">Jogos</option>
            </select>{" "}
            <br />
            <label htmlFor="description">Descrição:</label>
            <br />
            <textarea
              name="description"
              id="description"
              cols="100"
              rows="8"
            ></textarea>{" "}
            <br /> <br />
            <button type="submit" className="save">Salvar</button>
          </form>
        </section>
      </main>
    </>
  );
}
