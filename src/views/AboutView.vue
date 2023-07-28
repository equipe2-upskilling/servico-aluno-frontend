<script setup>
    const squad = [
        { img: '/assets/imgs/alberto.jpg', name: 'ALBERTO TULIO TORRES SANTAMARIA' },
        { img: '/assets/imgs/juliano.jpg', name: 'JULIANO SOARES DE CEZARO' },
        { img: '/assets/imgs/matheus.jpg', name: 'MATHEUS MATOS MOREIRA' },
        { img: '/assets/imgs/raissa.png', name: 'RAISSA ARRUDA DE ARAÚJO' },
        { img: '/assets/imgs/ricardo.jpg', name: 'RICARDO DA SILVA MENDES' },
        { img: '/assets/imgs/vitor.jpg', name: 'VITOR BANDEIRA GONÇALVES' },
    ];
</script>

<template>
    <v-container style="padding: 20px">
        <div><h2>Projeto</h2></div>
        <div>É com grande alegria e satisfação que compartilhamos os frutos do nosso projeto desenvolvido em equipe! <br />
            Ao longo desta jornada, enfrentamos desafios que instigaram o nosso crescimento, individualmente e como equipe.
            Aprimoramos nossas habilidades e superamos obstáculos com criatividade e determinação.<br />
            Gostaríamos de agradecer os ensinamentos do professor Danilo, todo apoio da Yellow Belt Carina, 
            e à ânima que nos deu essa oportunidade de aprimorar os nossos conhecimentos
        </div>
        <div>&nbsp;</div>
        <div><h2>Equipe</h2></div>
        <v-row>
            <v-col v-for="person in squad" style="max-width: 180px">
                <v-container>
                    <v-row style="margin-bottom: -26px">
                        <v-col><v-img :src="person.img" height="180px" width="180px" cover style="border-radius: 10px; border: 3px solid #DDD"></v-img></v-col>
                    </v-row>
                    <v-row>
                        <v-col style="font-weight: bold; font-size: 14px"> {{ person.name }} </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>