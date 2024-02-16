
const Title = ({children}: {children: string}) => {
  return <h1>{children}</h1>
}

export default function App() {
  return (
    <div className="App">

      <h2>Hello React + Typescript 🧑🏼‍💻</h2>
      <Title>
        Hello
      </Title>
    </div>
  )
}
