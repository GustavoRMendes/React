/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import style from './style.module.css'
export default function  Buttons(props) {
  return (
    <> 
    <br />
    <button><a href={props.href} target="_blank" className={style.button}>{props.children}</a> </button>
      </>
  )  
}