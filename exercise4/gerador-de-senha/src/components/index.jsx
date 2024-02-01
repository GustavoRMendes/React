import PropTypes from "prop-types";
import style from "./Gerador/style.module.css";
Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func,
};
export default function Input(props) {
  return (
    <>
      <input
        className={style.input}
        type="number"
        id="passwordSize"
        min={1}
        value={props.passwordSize}
        onChange={(evt) => props.setPasswordSize(+evt.target.value)}
      />
    </>
  );
}
