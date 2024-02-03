import {useRef} from 'react'
export default function App(){
  const buttonRef = useRef('Clique')
  const inputRef = useRef(null)
  function handleInput() {
    inputRef.current.focus()
  }
  return(
    <>
      <h2>Usando useRef</h2>
      <input ref={inputRef} type="text" />
      <br /> <br />
      <button onClick={handleInput}>{buttonRef.current}</button>
    </>
  )
}