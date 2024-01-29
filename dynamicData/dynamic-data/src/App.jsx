function sum(x,y){
  return x + y
}
export default function App(){
  const age = 19
  const firstName = 'Gustavo'
  return (
    <div>
      <p>Hello, my name is {firstName}</p>
      <p>The result of the sum  = {sum(20,30)}</p>
      <p>My age is {age}</p>
      <p>{true && "true"}</p>
      <p>{age >= 18 ? "of Legal age" : "minor"}</p>
    </div>
  )
}