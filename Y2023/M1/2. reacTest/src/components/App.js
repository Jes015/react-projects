import Pokemons from "./pokemons";
import { useRef } from "react";


function App(){

    let button = useRef(), menu = useRef();

    const handdlePokemons = ()=>{
        if(button.current.textContent === "Mostrar"){
            button.current.textContent = "Ocultar"
            menu.current.style.display = "block"
        }else{
            button.current.textContent = "Mostrar"
            menu.current.style.display = "none"
        }
    }

    return(<><button onClick={()=>handdlePokemons()} ref={button}>Mostrar</button><div style={{display:"none"}} ref={menu}>Menu con elementos<Pokemons /></div></>)
}

export default App;