<script setup>
    const contentList = ([
        {
            title: 'Aula 1', 
            value: 1,
            time: '07:05'
        },
        {
            title: 'Aula 2', 
            value: 2,
            time: '02:13'
        },
        {
            title: 'Aula 3', 
            value: 3,
            time: '25:36'
        }
    ]);
</script>

<template>
    <v-row id="course-detail">
        <v-col cols="15">
            <div class="title">Curso tal</div>
            <div class="descr">Esse curso serve para tal e tal</div>
            <div class="descr">Duração: 40h</div>
            <div>&nbsp;</div>
            <div class="content">Conteúdo:</div>
            <v-container id="ctnr-content">
                <v-row class="row-content" v-for="content in contentList" :key="content.title">
                    <v-col cols="1"><v-icon icon="mdi-play-circle" /></v-col>
                    <v-col cols="18">{{content.title}}</v-col>
                    <v-col cols="1">{{content.time}}</v-col>
                </v-row>
            </v-container>
        </v-col>
        <v-col cols="3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-img src="./assets/imgs/empty-player.png"></v-img>
                    </v-col>
                </v-row>
                <div class="course-price">R$ 50,00</div>
                <RouterLink class="text-blue text-decoration-none" to="/pagamento">
                    <v-btn 
                        block
                        class="text-none mb-4"
                        color="indigo-darken-2"
                        size="x-large"
                        variant="flat"
                        outlined> Inscrever-se </v-btn>
                </RouterLink>
            </v-container>
        </v-col>        
    </v-row>
</template>

<style>
    #course-detail{
        margin: 12px 4px !important;        
    }
    #course-detail > .v-col{
        background-color: #FFF !important;
        border: 1px solid #CCC;
        margin: 0px 4px !important;
        padding: 6px;
        border-radius: 6px;
    }
    #course-detail .title{
        font-size: 24px;
        font-weight: bold;
    }
    #course-detail .descr{
        font-size: 16px;
    }
    #course-detail div{
        margin: 0px 8px !important;
    }
    .row-content{
        border-collapse: collapse;
        border: 1px solid #DDD;
        background-color: #EEE;
        margin: 0px !important;
        padding: 2px !important;
    }
    .row-content .v-col{
        border: 0px !important;
    }
    .v-container{ padding-left: 0px !important}
    .course-price{        
        padding: 10px 0px !important;
        font-size: 24px;
        font-weight: bold;
        color: #43A047;
    }
    #ctnr-content .v-col:first-child{
        max-width: 10px;
    }
</style>