import { pokemonApi } from "./pokemonApi";
import type { Pokemon } from "env";

const getPokemons = ():any =>{
    const pokemonArr = Array.from(Array(650))
    return pokemonArr.map((_, index)=> index + 1)
}

console.log("hola")

const getPokemonOptions =()=>{
    const pokemons = getPokemons ()
    console.log(pokemons)
}

export default getPokemonOptions