import React from 'react';
import Logo from './imgs/naruto.png'
import Dados2 from './Dados2'

export default function Header(){
   const nome = ' Naruto'
   const episodios = ' 500'
   const ano=()=>{
    return ' 2002'
   }

    return(
        <>

        <header>
            <img src={Logo}/>
            <Dados2
            nome={nome}
            episodios={episodios}
            ano={ano}
            />
        </header>

        </>
    )
}