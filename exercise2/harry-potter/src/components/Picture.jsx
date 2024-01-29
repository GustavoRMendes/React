import style from '../styles/App.module.css'
export default function Picture(){
  return (
    <>
       <img className={style.img} src="./public/harry.jpg" alt="Harry Potter" />
    </>
  )
}