import PersonContext from "../contexts/PersonContext"
import { useContext } from 'react'
export default function Footer(){
  const person = useContext(PersonContext)
  return (
    <>
    <footer>
      &copy; {person.firstName}
    </footer>
    </>
  )
}