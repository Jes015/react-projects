import { useState } from "react"

function Form(props) {

    const [data, setData] = useState({})


    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        }
        )
    }

    function handleChecked(e) {
        setData({
            ...data,
            [e.target.name]:e.target.checked
        }
        )
    }

    return (
        <form>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={handleChange}></input>
            </div>
            <div>
                <select name="sexo" defaultValue="" onChange={handleChange}>
                    <option value=""></option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Prefiero no decirlo">Prefiero no decirlo</option>
                    <option value="No binario">No binario</option>
                    <option value="Desconocido">Desconocido</option>
                </select>
            </div>
            <div>
                <label htmlFor="a">Nombre</label>
                <input type="checkbox" name="a" id="a" onChange={handleChecked}></input>
            </div>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={handleChange}></input>
            </div>
        </form>
    )
}

export default Form;