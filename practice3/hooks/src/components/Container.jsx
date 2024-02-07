// eslint-disable-next-line react/prop-types
export default function Container({children}){
  return (
    <>
      <div>
        Container do App
        {children}
      </div>
    </>
  )
}