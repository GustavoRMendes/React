import style from "./style.module.css";
import { useState } from "react";
export default function Gerador() {
  const [copyText,setCopyText] = useState("Copiar");
  const [password, setPassword] = useState("");
  const [passwordSize,setPasswordSize] = useState(12)

  function randomPassword() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }  
    setPassword(newPassword)
    setCopyText("Copiar")
  }
  
    function copyToClipboard() {
    window.navigator.clipboard.writeText(password); 
    setCopyText('Copiado')
  }

  const passwordRandom = () => setPassword(randomPassword);
  
  return (
    <>
      <body>
        <h2 className={style.title}>Gerador de Senhas</h2>
        <label className={style.label} htmlFor="passwordSize">Tamanho da senha: </label>
        <input
        className={style.input}
        type="number"
        id="passwordSize"
        min={1}
        value={passwordSize}
        onChange={(evt) =>setPasswordSize( evt.target.value)}
        />
        <button
          className={style.buttonGerator}
          onClick={passwordRandom}
        >
          Gerar senha de {passwordSize} caracteres.
        </button>
        <button className={style.buttonCopy} onClick={copyToClipboard}>
          {copyText}
        </button>
        <div className={style.result}>{password}</div>
      </body>
    </>
  )
}