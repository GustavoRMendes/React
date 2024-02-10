import { useState, useEffect } from "react";

const API_URL = "https://viacep.com.br/ws/";

async function fetchCep(cep) {
  const response = await fetch(`${API_URL}${cep}/json/`);
  if (!response.ok) {
    throw new Error("Falha ao buscar CEP");
  }
  const data = await response.json();
  return data;
}

export default function App() {
  const [cep, setCep] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCep(cep);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      }
    };
    if (cep.length === 8) {
      fetchData();
    } else {
      setData(null);
      setError(null);
    }
  }, [cep]);

  const handleCepChange = (e) => {
    const newCep = e.target.value.replace(/\D/g, "");
    setCep(newCep);
  };

  return (
    <div>
      <label htmlFor="cep">CEP:</label>
      <input
        type="text"
        id="cep"
        value={cep}
        onChange={handleCepChange}
        maxLength={8}
      />
      {data && (
        <ul>
          <li>Logradouro: {data.logradouro}</li>
          <li>Bairro: {data.bairro}</li>
          <li>Cidade: {data.localidade}</li>
          <li>Estado: {data.uf}</li>
        </ul>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
