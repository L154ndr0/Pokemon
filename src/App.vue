<script setup lang="ts">
import type { Pokemon } from 'env';
import getPokemonOptions from './api/getPokemonOptions';
import { ref } from 'vue';
import PokemonOptions from './components/PokemonOptions.vue';  
import PokemonPicture from './components/PokemonPicture.vue';

  
  const pokemonArr = ref<Pokemon[]>([])
  const pokemon = ref<Pokemon>()
  const showPokemon = ref<boolean>(false)
  const showAnswer = ref<boolean>(false)
  const message = ref<string>()


  const mixPokemonArray =async()=>{
    pokemonArr.value = await getPokemonOptions()
    const ramdomInt = Math.floor(Math.random() *4)
    pokemon.value = pokemonArr.value[ramdomInt]
    console.log(pokemon.value)
    console.log(pokemonArr.value)
  }

  const checkAnswer =(selectedId: number)=>{
    showPokemon.value = true
    showAnswer.value = true

    if(selectedId === pokemon.value?.id){
      message.value = `Correcto era un ${pokemon.value.name}`
    }
    else{
      message.value = `Cuerniao, eso es un ${pokemon.value?.name}`
    }
  } 

const newGame =()=>{
  showPokemon.value = false
  showAnswer.value = false
  pokemonArr.value = []
  pokemon.value = undefined
  
  mixPokemonArray()  
}

mixPokemonArray()
</script>

<template>
  <div class="m-12">
    <PokemonPicture :show-pokemon="showPokemon" v-if="pokemon" :pokemon-id="pokemon.id" />
    <PokemonOptions @selection-pokemon="checkAnswer" :pokemons="pokemonArr" />
  </div>
  <div v-if="showAnswer" class="flex flex-col text-center space-y-6">
      <p class="text-2xl font-bold">{{ message }}</p>
    <div>
      <button class="border-4 p-2 rounded-2xl" @click="newGame">Nuevo juego</button>
    </div>
  </div>

</template>
