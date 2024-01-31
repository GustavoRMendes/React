/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import styles from "./styles.module.css"

export default function LinkButton(props) {
  return (
    <a className={styles.wrapper} href={props.href} target="_blank">{props.children}</a>
  )
}