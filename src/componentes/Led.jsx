import React from 'react'
import ledVerde from './imgs/ledVerde.jpg'
import ledVermelha from './imgs/ledVermelha.jpg'


export default function Led(props){

  return(
  <>
    <img style={{width: '50px'}} src={props.ligado?ledVerde:ledVermelha}/>
    <button onClick={()=>props.setLigado(!props.ligado)}>
      {props.ligado?"desligar":"ligar"}
    </button>
  </>
  
  )
}