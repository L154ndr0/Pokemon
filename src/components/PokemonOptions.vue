<template>

    hola
</template>

<script lang="ts" setup> 
    import type { Pokemon } from 'env';

    defineProps<{
        pokemons: Pokemon[]
    }>()

</script>