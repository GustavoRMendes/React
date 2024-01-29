import './styles/globals.css'
import style from './App.module.css'
export default function App(){
  return (
    <>
    <div
    style={{backgroundColor:'black', height:'100vh'}}
    >
      <h1 className="title"
      style={{color: '#e5e5e5',textAlign: 'center'}}
      >
      Estilizando Componentes
      </h1>
    </div>
    <div  className={style.box}>Div</div>
    <p className={style.paragraph}>Meu parágrafo</p>
    </>
  )
}