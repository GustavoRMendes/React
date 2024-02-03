import { useState }  from "react";
import InputText from "./components/InputText";
import TextArea from "./components/TextArea";
import Title from "./components/Title";
import dayjs from 'dayjs'
function App() {
  const [list] = useState([])
  const [comment,setComment] = useState('')
  const [email,setEmail] = useState('')
  const [addComments,setAddComments] = useState('')
  const addComment = () => {
    list.unshift({email,comment})
    setAddComments(() => (
      <>
      {list.map(item => 
      <div key={Math.floor(Math.random() * 10000)}>
        <h2 >{item.email}</h2> 
        <p>{item.comment}</p> 
        <p>Data: {dayjs().format('MM-DD-YYYY')}</p>
      </div>
      )}
      </>
    ))
  }
  function handleSubmit(ev){
    ev.preventDefault()  
    addComment({email,comment})
    setEmail('')
    setComment('')
  }
  return (
    <>
        <div id="container">
          <Title/>
          <form onSubmit={handleSubmit}>
            <InputText  email={email} setEmail={setEmail}/>
            <TextArea  comment={comment} setComment={setComment}/>
            <button type="submit">Enviar Comentário</button>
            <hr/>
          </form>
        </div>
        <div>
          {addComments}
        </div>
    </>
  );
}
export default App;
