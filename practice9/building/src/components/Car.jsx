import { useContext } from "react"
import CarContext from "../context/CarContext"

const Car = () => {
  const car = useContext(CarContext)
  return (
    <div>
      <p>The car is {car.firstName}</p>
    </div>
  )
}
export default Car