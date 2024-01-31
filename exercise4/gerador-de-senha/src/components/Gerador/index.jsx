import Generator from "../../useGenerator";
import style from "./style.module.css";
import { useState } from "react";
export default function Gerador() {
  const generic = Generator();
  const [copyText] = useState("Copiar");

  function copyToClipboard() {
    window.navigator.clipboard.writeText(generic.password);
  }
  return (
    <>
      <body>
        <h2 className={style.title}>Gerador de Senhas</h2>
        <button
          className={style.buttonGerator}
          onClick={generic.generePassword}
        >
          Gerar
        </button>
        <button className={style.buttonCopy} onClick={copyToClipboard}>
          {copyText}
        </button>
        <div className={style.result}>{generic.password}</div>
      </body>
    </>
  );
}
