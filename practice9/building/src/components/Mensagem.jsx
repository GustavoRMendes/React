import { useContext } from "react";
import StringContext from "../context/StringContext";

export const Mensagem = () => {
  const value = useContext(StringContext);
  return <p> {value} </p>;
};
