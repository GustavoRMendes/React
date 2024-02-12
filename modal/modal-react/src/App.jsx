import { useState } from "react";
import Modal from "./components/modal";

export default function App(){

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
    <div>
      <h2>Modal</h2>
      <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
    </div>
    <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
      Sou o children
    </Modal>
    </>
  )
}