<script setup lang="ts">
import type { Pokemon } from 'env';
import getPokemonOptions from './api/getPokemonOptions';
import { ref } from 'vue';
import PokemonOptions from './components/PokemonOptions.vue';  
import PokemonPicture from './components/PokemonPicture.vue';

  
  const pokemonArr = ref<Pokemon[]>([])
  const pokemon = ref<Pokemon>()

  const mixPokemonArray =async()=>{
    pokemonArr.value = await getPokemonOptions()
    const ramdomInt = Math.floor(Math.random() *4)
    pokemon.value = pokemonArr.value[ramdomInt]
    console.log(pokemon.value)
    console.log(pokemonArr.value)
  }

mixPokemonArray()
</script>

<template>
  <PokemonPicture v-if="pokemon" :pokemon-id="pokemon.id" />
  <PokemonOptions :pokemons="pokemonArr" />

</template>
