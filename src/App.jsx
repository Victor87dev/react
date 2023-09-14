import React, { useState } from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import './App.css'
import Relogio from './componentes/Relogio'
import Numero from './componentes/Numero'

export default function App(){
const [num,setNum] = useState(20)
const [nome,setNome] = useState('joao')
let n1 = 10

const n100 = ()=>{
n1 = 100
console.log(n1)
}


  return(
  <>
  
  <p className='texto'>heloow</p>
  <Header/>
  <Corpo/>
  <Relogio/>
  <p>Valor do state num em App: {num}</p>
  <Numero num={num} setNum={setNum}/>
  <p>{nome}</p>
  </>
  
  )
}

