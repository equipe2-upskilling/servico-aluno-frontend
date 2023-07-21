<script setup>
    import CoursesInfoCard from '../components/CoursesInfoCard.vue'
    const courses = [
        { title: "Matrizes", teacher: "Joe Montana",  descr: "teste matrizes" },
        { title: ".NET Core", teacher: "Danilo",  descr: "teste dotnet" },
        { title: "Vue 3", teacher: "Mario",  descr: "teste vue 3..." },
        { title: "Vue 2", teacher: "Mario",  descr: "teste vue 2..." },
    ];
</script>

<template>
    <v-card class="teste">
        <v-row class="row-courses">
            <v-col cols="15" sm="5" md="4" lg="3" xl="2" xxl="1" v-for="course in courses">
                <courses-info-card :title="course.title" :teacher="course.teacher" :descr="course.descr" :acquired=true></courses-info-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<style>
    .title {
        font-size: 20px; font-weight: bold; margin-bottom: 12px;
    }
    .row-courses > div {
        padding-top: 12px !important;
        padding-left: 6px !important;
        padding-right: 6px !important;
        padding-bottom: 0px !important;
    }
    .teste {
        border: 1px solid #D6D6D6 !important;
        background-color: #DFDFDF !important;
        width: 100% !important;
        margin: 10px 0px !important;
        padding: 20px !important;
        background-color: #4158D0;
        padding-bottom: 26px !important;
    }
</style>