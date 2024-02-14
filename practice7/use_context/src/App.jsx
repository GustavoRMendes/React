import CarInfo from "./Components/CarInfo"
import CarContext from "./Context/CarContext"

const car = {
  name: 'Corolla'
}
export default function App() {
  
  return (
    <>
      <CarContext.Provider value={car}>
        <CarInfo/>
      </CarContext.Provider>
    </>
  )
}
