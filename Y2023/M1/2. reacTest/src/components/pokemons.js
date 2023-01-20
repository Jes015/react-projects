import { useEffect, useState } from "react"

function Pokemons(porps) {

    const [pokemons, setPokemons] = useState([])

    const getPokemons = async (url) => {
        const res = await fetch(url);
        const pokemonsJson = await res.json();

        let pokemonse = [];
        pokemonsJson.results.forEach(async(element) => {
            await fetch(element.url).then(res => res.json()).then(obj => {
                pokemonse.push({
                    id: obj.id,
                    name: obj.name,
                    avatar: obj.sprites.front_default
                })


            })
        });

        setTimeout(()=>{setPokemons(pokemonse)},2000)
        
        
    }



    return (
        <div>
            <ul>
            {pokemons ? pokemons.map((obj) => <li key={obj.id}><span>{obj.name}</span><img src={obj.avatar}></img></li>) : <h1>No elements</h1>}
            </ul>
            <button onClick={async()=>{ await getPokemons("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")}}>Ver</button>
        </div>
    )
}

export default Pokemons;