export default function Form() {
  return (
    <>
      <form>
        <label htmlFor="firstName">Nome: </label>
        <input type="text" id="firstName" /> <br />
        <label htmlFor="email">E-mail: </label>
        <input type="email" id="email" /> <br />
        <label htmlFor="occupation">Ocupação:</label>
        <select>
          <option disabled selected>
            Selecione uma Opção
          </option>
        </select>{" "}
        <br /> <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
