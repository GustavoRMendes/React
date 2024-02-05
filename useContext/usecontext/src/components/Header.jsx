import UserContext from "../contexts/UserContext"
import { useContext } from 'react'
export default function Header () {
  const user = useContext(UserContext)
  return (
    <>
      <header>
        <h3>Bem vindo, {user.name}!</h3>
        <hr />
      </header>
    </>
  )
}