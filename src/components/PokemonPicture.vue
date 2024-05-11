<template>
    <img :src="img" alt="imagen-pokemon">
</template>

<script lang="ts" setup>
    
    const props = defineProps<{
        pokemonId: number
    }>()

    const img= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ props.pokemonId }.svg`;

</script>