import { useContext } from "react";
import CarContext from "../Context/CarContext";

export default function CarInfo() {
  const car = useContext(CarContext)
  return (
    <h2>{car.name}</h2>
  )
}
