import React from 'react'

export default function App(){
  const carros = ["HRV","Corolla","Uno","M2"]
  const listaCarros = carros.map(
    (c,i)=>
      <li key={i}>{i} - {c}</li>
  )

  return(
  <>
    <ul>{listaCarros}</ul>
  </>
  
  )
}

