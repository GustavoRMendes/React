import Container from "./components/Container";
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import UserContext from "./contexts/UserContext";

// useContext
export default function App() {
  const user = {
    name: "João",
    email: "joao@gmail.com",
  };
  return (
    <>

      <UserContext.Provider value={user}>
        <Header/>
        <h1>Usando Contexto</h1>
        <Container>
          <UserInfo />
        </Container>
      </UserContext.Provider>
    </>
  );
}
