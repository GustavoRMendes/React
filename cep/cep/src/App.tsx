import { useEffect, useState } from "react";
export default function App() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({
    localidade: "",
    bairro: "",
    cep: "",
    logradouro: "",
    complemento: "",
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        if (!response.ok) {
          throw new Error("Not found!");
        }
        const result = await response.json();
        setAddress(result);
      } catch (error) {
        console.error("Erro ao buscar API:", error);
      }
    };
    if (cep.length === 8) { 
      fetchApi();
    }
  }, [cep]);
  
  const handleInputChange = (ev) => {
    setCep(ev.target.value);
  };
  return (
    <div>
      <h1>Buscador de CEP</h1>
       <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={handleInputChange}
      />
      <p> Cep: {address.cep} </p>
      <p> Cidade: {address.localidade} </p>
      <p> Bairro: {address.bairro} </p>
      <p> Logradouro: {address.logradouro} </p>
      <p> Complemento: {address.complemento} </p>
    </div>
  );
}
