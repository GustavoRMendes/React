import style from './styles/App.module.css'
import Title from './components/Title'
import Paragraph from './components/Paragraph'
import Picture from './components/Picture'
import {Button} from './components/Button'
export default function  App() {
  return (
  <>
  <body>
  <div className={style.card}>
    <Title/> 
    <Picture/>
    <Paragraph/>
    <Button/>
  </div>
  </body>

  </>
  )
}