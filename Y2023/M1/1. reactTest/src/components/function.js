import React, { useState, useEffect } from "react";
import ButtonR from './button';
import RelogHooks from "./relog";

function Header(props) {

    const [nombre, setNombre] = useState('Carlos');
    const [contador, setContador] = useState(0);

    return (
        <>
            <h1>Soy {nombre}</h1>
            <RelogHooks/>
            <span>Tengo mas de {contador} casas</span>
            <div>
                <ButtonR evente={() => setContador(contador + 1)} name={"sumar"} />
            </div>
        </>
    )
}

export default Header;