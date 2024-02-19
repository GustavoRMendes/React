import Car from "./components/Car";
import { Mensagem } from "./components/Mensagem";
import CarContext from "./context/CarContext";
import StringContext from "./context/StringContext";

const car = {
  firstName: 'Corolla'
}

export default function App() {
  return (
    <>
      <StringContext.Provider value={"Isso é o valor"}>
        <Mensagem />
      </StringContext.Provider>
      <hr/>
      <CarContext.Provider value={car} >
        <Car/>
      </CarContext.Provider>
    </>
  );
}
