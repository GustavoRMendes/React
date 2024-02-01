import Input from "..";
import style from "./style.module.css";
import { useState } from "react";
export default function Gerador() {
  const [copyText, setCopyText] = useState("Copiar");
  const [password, setPassword] = useState("");
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);
  const passwordSize = showInput ? customSize : 8;
  function randomPassword() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado");
  }

  const passwordRandom = () => setPassword(randomPassword);

  return (
    <>
      <body>
        <main>
          <h2 className={style.title}>Gerador de Senhas</h2>
          <label htmlFor="showInput" className={style.label}>
            Costumizar o tamanho:{" "}
          </label>
          <input
            className={style.input}
            type="checkbox"
            id="showInput"
            value={showInput}
            onChange={() => setShowInput((current) => !current)}
          />
          <br />
          {showInput && (
            <div>
              <label className={style.label} htmlFor="passwordSize">
                Tamanho da senha:
              </label>
              <Input
                passwordSize={customSize}
                setPasswordSize={setCustomSize}
              />
            </div>
          )}
          <br />
          <button className={style.buttonGerator} onClick={passwordRandom}>
            Gerar senha de {showInput ? passwordSize : 8} caracteres.
          </button>
          <button className={style.buttonCopy} onClick={copyToClipboard}>
            {copyText}
          </button>
          <div className={style.result}>{password}</div>
        </main>
      </body>
    </>
  );
}
