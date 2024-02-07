import Container from "./components/Container"
import Footer from "./components/Footer"
import PersonInfo from "./components/PersonInfo"
import PersonContext from "./contexts/PersonContext"

export default function App(){
  
  const person = {
    firstName: 'Gustavo',
    email: 'gustavormendess@gmail.com'
  }

  return (
    <>
    <PersonContext.Provider value={person}>
      <h2>Use context</h2>
      <Container>
        <PersonInfo/>
      </Container>
      <Footer/>
    </PersonContext.Provider>

    </>
  )
}