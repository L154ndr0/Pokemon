<script setup lang="ts">
import type { Pokemon } from 'env';
import getPokemonOptions from './api/getPokemonOptions';
import { ref } from 'vue';
import PokemonOptions from './components/PokemonOptions.vue';  
  
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

  <PokemonOptions :pokemons="pokemonArr" />

  <div class="flex justify-center mt-14" v-for="pokemon in pokemonArr">
    <p class="text-5xl">{{ pokemon.name }}</p>
  </div>
</template>
