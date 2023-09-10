import React from 'react';
import Dados from './Dados'

export default function Corpo(){
    const cnl =()=>{
        return(' One Punch Man')
    }
    const yt = ' 44'
    const crs = ' 2017'
    const somar = (v1,v2)=>{
        return v1+v2
    }

    return(
        <section>
            <img src="./public/img/saitama.png"/>
            <Dados 
                canal={cnl}
                youtube={yt}
                curso={crs}
                somar={somar}
            />
        </section>  
    )

}