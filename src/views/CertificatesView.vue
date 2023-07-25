<script setup>
    const certificates = [
        { title: "Curso 1" },
        { title: "Curso 2" },
    ];
</script>

<template>
    <v-container id="ctnr-certificate">
        <div><h2>Meus Certificados</h2></div><div>&nbsp;</div>
        <v-row class="row-certificate" v-for="certificate in certificates" :key="certificate.title">
            <v-col cols="1"><v-icon icon="mdi-certificate" /></v-col>
            <v-col cols="14">{{certificate.title}}</v-col>
            <v-col cols="4">
                <RouterLink class="text-blue text-decoration-none" to="/gerar-certificado">
                    <v-btn
                        color="indigo-darken-2">Gerar</v-btn>
                </RouterLink>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    .row-certificate{ 
        border-collapse: collapse !important; 
        border: 1px solid #CCC; 
        border-bottom: 0px !important; 
        background-color: #FFF; 
        margin: 0px 10px !important;
        display : flex;
        align-items : center;
    }
    .v-container .row-certificate:last-child{ border-bottom: 1px solid #CCC !important; }
    #ctnr-certificate .v-col{
        vertical-align: middle !important;
        padding: 8px !important;
        vertical-align: middle !important;
    }
    #ctnr-certificate .v-col:first-child{
        max-width: 10px;
        padding-left: 12px !important;
        padding-right: 24px !important;
    }
    #ctnr-certificate .v-col:last-child{
        max-width: 100px;
    }
    #ctnr-certificate > div{
        padding-left: 10px;
    }
</style>