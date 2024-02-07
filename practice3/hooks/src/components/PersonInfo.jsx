import { useContext } from "react"
import PersonContext from "../contexts/PersonContext"

export default function PersonInfo(){
  const person = useContext(PersonContext)
  return (
    <>
      <h2>
        Informações da pessoa.
      </h2>
      <p>Nome: {person.firstName}</p>
      <p>Email: {person.email}</p>
    </>
  )
}