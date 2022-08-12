import React from 'react';
import Card from './PokemonCard';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import axios from 'axios';


const PokeDex = () => {

    const name = useSelector(state => state.userName)
    const [url, setUrl] = useState([])
    const [types, setTypes] = useState(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"])
    const [typesMap, setTypesMap] = useState(["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"])
    const [filter, setFilter] = useState("")
    const [length, setLength] = useState(0)
    const [indexStart, setIndexStart]=useState(0)
    const [indexEnd, setIndexEnd]=useState(0)
    const [urlAux,setUrlAux]=useState([])
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/type/${id}`)
            .then((res) => {
                setUrl(res.data.pokemon.splice(0,15))
                
                setLength(res.data.pokemon.length)
            })
    }, [id])

    const pagination=function(e){
        
            axios.get(`https://pokeapi.co/api/v2/type/${id}`)
                .then((res) => {
                    console.log(e)
                    console.log(e+6)
                    console.log(res.data.pokemon.splice(e,15))
                    setUrl(res.data.pokemon.splice(e-15,15))
                                        
                })
    }
    let buttons = []

    
    for (let i = 0; i <= length/15; i++) {
       
        buttons[i] = i*15
    }

    function filterPokemon(text) {

        setFilter(text)

        setTypesMap(types.filter((e) => {
            return e.indexOf(text) !== -1
        }))
    }


    return (
        <div className='pokeDex'>
            <div className='poke'></div>
            <div className='welcome'>
                <h3>Welcome {name}, here you can find your favorite :</h3>
            </div>

            <div className='filter'>
                <input placeholder='     Filter by type' type="text" value={filter} onChange={(e) => { filterPokemon(e.target.value) }} />
                <select name="type" id="type" onChange={(e) => { setId(types.indexOf(e.target.value) + 1) }}>
                    <option disabled="">All</option>
                    {typesMap.map((e) => {
                        return (
                            <option key={e} value={e}>{e}</option>
                        )
                    })}
                </select>
            </div>
            <div className='pokemons'>
                {url.map((e) => {
                    return (<Card urls={e} key={e.pokemon.url} />)
                })}
            </div>
            <div className='buttons'>
            {buttons.map((e)=>{
                if(e!==0){
                    return (<button onClick={()=>{pagination(e)}} key={e}>{e}</button>)
                }
                
            })}
            </div>
            
        </div>
    );
};

export default PokeDex;