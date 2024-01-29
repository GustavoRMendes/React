/* eslint-disable react/prop-types */
import style from '../styles/App.module.css'
export default function Card({title,alt,src}){
  return (
    <>
      <h1>{title}</h1>
      <img src={src}  alt={alt}  className={style.img}/>
    </>
  )
}