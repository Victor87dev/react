import React,{useState} from 'react'

export default function App(){

  const [log,setLog] = useState(false)

  const mslogin = ()=>{
    return 'Usuário logado'
  }
  const msloginoff = ()=>{
    return 'Fazer login'
  }

  const cumprimento =()=>{
    const hora = new Date().getHours()
    if(hora >= 0 && hora < 13){
      return 'Bom dia'
    }else if(hora >= 13 && hora < 18){
      return 'Boa tarde'
    }else{
      return 'Boa noite'
    }
  }

  return(
  <>
  {cumprimento()}
   <p>{log?mslogin():msloginoff()}</p>
   <button onClick={()=>setLog(!log)}>{log?'deslogar':'login'}</button>

  </>
  
  )
}

