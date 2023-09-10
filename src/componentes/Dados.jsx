import React from 'react'

export default function Dados(props){
    let n1 = 10
    let n2 = 30
    return(
        <section>
            <p>Nome:{props.canal()}</p>
            <p>Episodios:{props.youtube}</p>
            <p>Ano:{props.curso}</p>
            <p>{'O resultado da soma de ' + n1 + ' + ' + n2 + ' é igual a ' + props.somar(n1,n2) }</p>
        </section>
    )
}