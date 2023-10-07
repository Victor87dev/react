import React from 'react'

export default function Resultado(props){
    return(
       <div> 
        <p>Soma das notas: {props.somaDasNotas}</p>
        <p>{props.somaDasNotas >= 60 ? "aprovado" : "reprovado"}</p>
       </div> 
    )
}