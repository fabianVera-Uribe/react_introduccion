import React, {useState, useEffect} from "react";

function Count() {
  const [count, setCount ] = useState(0)
  useEffect( () => {
    let titulo = document.querySelector(".titulo");
    titulo.textContent = `Te faltan ${10 - count} para el final`
    if(count === 10) {
      titulo.textContent = "Llegaste al número máximo"
    }
  })

  return(
    <div>
      <h2>El estado actual es: {count}</h2>
      <button  onClick={() => {
        if(count < 10) {
          setCount( prevCount => prevCount + 1)
        }}}>suma</button>
      <button  onClick={() => {
        if(count > 0) {
          setCount( prevCount => prevCount - 1)
        }}}>resta</button>
      <button  onClick={() => {
          setCount(0)
        }}>reset</button>
  </div>
  )
}
export default Count;