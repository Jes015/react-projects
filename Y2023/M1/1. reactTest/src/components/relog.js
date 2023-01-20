import React,{useState, useEffect} from "react";

function RelogHooks(){
    const [tiempo,setTiempo] = useState(new Date().toLocaleTimeString())
    const [encendido,setEncendido] = useState(false);

    useEffect(()=>{
        console.log('ola')
        let intervalo;
        clearInterval(intervalo);

        if(encendido){
            intervalo = setInterval(()=>{
                setTiempo(new Date().toLocaleTimeString())
            },1000)
        }else{
        }

    },[encendido])

     return(
        <div>
            { encendido && <span>Tiempo: {tiempo}</span>}
            
            <button onClick={()=>{setEncendido(true)}}>Iniciar</button>
            <button onClick={()=>{setEncendido(false)}}>Parar</button>
        </div>
     )
}

export default Relog;