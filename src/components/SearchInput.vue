<script setup></script>

<template>
    <v-text-field
        v-model="search_input"
        density="compact"
        variant="solo"
        label="Pesquisar Cursos"
        append-inner-icon="mdi-magnify"
        single-line
        rounded
        hide-details        
        @click:append-inner="onClick"
        @change="onClick"        
        class="search"
     ></v-text-field>
</template>     