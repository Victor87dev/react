import React from 'react';
import Dados from './Dados'

export default function Corpo(){
    const cnl = ' CFB Cursos'
    const yt = ' Animes Demon Slayer'
    const crs = ' One'

    return(
        <section>
            <img src="./public/img/saitama.png"/>
            <h2>Demon slayer</h2>
            <Dados 
                canal={cnl}
                youtube={yt}
                curso={crs}
            />
        </section>  
    )

}