<template>
    <div class="grid grid-cols-2 mx-32 gap-12 mt-6 space-y-1">
        <button @click="$emit('selectionPokemon',pokemon.id)" class="text-3xl border-4 p-4 rounded-2xl" v-for="pokemon in pokemons"
            :key="pokemon.id"
            :disabled="showPokemon == true || showAnswer == true">
                {{ pokemon.name }}
        </button>
    </div>
</template>

<script lang="ts" setup> 
    import type { Pokemon } from 'env';

    defineProps<{
        pokemons: Pokemon[]
        showPokemon: boolean,
        showAnswer: boolean,
    }>()

</script>