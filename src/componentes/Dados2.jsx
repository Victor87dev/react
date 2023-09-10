import React from 'react'

export default function Dados2(props){
    return(
        <section>
            <p>Nome:{props.nome}</p>
            <p>Episodios:{props.episodios}</p>
            <p>Ano:{props.ano()}</p>
        </section>
    )
}