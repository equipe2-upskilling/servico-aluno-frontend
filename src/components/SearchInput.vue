<script setup>
    import router from '@/router'
    function onClick() {
        //console.log('pesquisar');
        router.push('busca');
    }
</script>

<template>
    <v-text-field        
        density="compact"
        variant="solo"
        label="Pesquisar Cursos"
        append-inner-icon="mdi-magnify"
        single-line
        rounded
        hide-details
        @click:append-inner="onClick"
        @keydown.enter="onClick"
        class="search"
     ></v-text-field>
</template>     