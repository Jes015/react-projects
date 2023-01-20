import React, {useEffect} from "react";

function ButtonR(props){

    return(
        <button onClick={props.evente}>{props.name}</button>
    )
}

export default ButtonR;