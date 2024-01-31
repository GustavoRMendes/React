import Counter from './useCounter'
export default function App(){
  const counter = Counter()
 
  return (
    <>
      <button
      onClick={counter.handleClick}>
      Count is {counter.count}
      </button>
    </>
  )
}