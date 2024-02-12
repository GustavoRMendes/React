/* eslint-disable react/prop-types */

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: '#ffffff'
};
const CONTAINER_STYLE ={
  backgroundColor: '#000000',
  width: '400px',
  height: '500px',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
}
const BUTTON_CLOSE = {

}
function Modal({ isOpen, children,closeModal }) {
  if (isOpen) {
    return (
      <div style={CONTAINER_STYLE}>
      <div style={MODAL_STYLE}>
        {children}
      </div>
        <button style={BUTTON_CLOSE} onClick={closeModal}>❌</button> <br />
      </div>
    );
  }
  return null;
}

export default Modal;
