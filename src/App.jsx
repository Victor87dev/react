import React from "react";
import Logo from './componentes/imgs/naruto.png'

export default function App(){
  const saitama=()=>{
    return('cfb curso')
  }
  function matematico(){
    return 'alow'
  }
  return(
  <section>
    <header>
      <h1>Iniciando React</h1>
      <p>CFB cursos {saitama()}</p>
      <br/>
      <p>Curso de react {matematico()}</p>
      <p>app</p>
    </header>
     
    <section>
      <p>pq devo vencer ?, pq sou o melhor e sempre serei o melhor. MESTRE SAITAMA</p>
      <img src={Logo}/>
      <img src='/img/saitama.png'/>
    </section>
 
  </section>
  )
}

