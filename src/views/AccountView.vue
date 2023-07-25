<script setup>
    const payments = [
        { title: "Curso 1", status:"Pagamento confirmado", status_id: 3 },
        { title: "Curso 2", status:"Aguardando confirmação", status_id: 2 },
        { title: "Curso hhabhja jhag sjh jdsasd", status:"Aguardando confirmação", status_id: 2 },
    ];
</script>

<template>
  <v-container id="ctnr-profile">
      <div><h2>Editar perfil</h2></div><div>&nbsp;</div>
      <v-row class="row-profile">
          <v-col>
            <v-text-field
              label="Nome"
              model-value="Homer Simpson"></v-text-field>
          </v-col>
      </v-row>
      <v-row class="row-profile">
          <v-col>
            <v-btn 
              block
              class="text-none mb-4"
              color="indigo-darken-2"
              size="x-large"
              variant="flat"
              outlined
            >Salvar
            </v-btn>
          </v-col>
      </v-row>
  </v-container>
  <v-container id="ctnr-payment">
      <div><h2>Histórico de pagamentos</h2></div><div>&nbsp;</div>
      <v-row class="row-payment" v-for="payment in payments" :key="payment.title">
          <v-col>{{payment.title}}</v-col>
          <v-col>
            <div v-if="payment.status_id == 3" class="payment-status payment-green">{{payment.status}}</div>
            <div v-else class="payment-status payment-grey">{{payment.status}}</div>
          </v-col>
      </v-row>
  </v-container>
</template>

<style>
    .payment-status{ padding: 3px; color: #FFF; text-align: center !important; border-radius: 4px; }
    .payment-green{ background-color: #2E7D32 }
    .payment-grey{ background-color: #999 }
    #ctnr-profile, #ctnr-payment { margin-left: 10px }
    #ctnr-profile .v-btn{ max-width: 200px !important; min-width: 120px  !important }
    #ctnr-profile .v-row{ padding: 10px !important; }
    #ctnr-profile .v-col{ padding: 0px !important; vertical-align: middle !important }
    #ctnr-profile .v-row:last-child{ padding: 0px !important; margin: 0px !important }
    .v-container .row-payment:last-child{ border-bottom: 1px solid #CCC !important }
    #ctnr-payment .v-col{ padding: 8px !important; vertical-align: middle !important }
    #ctnr-payment .v-col:first-child{ min-width: 120px !important }
    #ctnr-payment .v-col:last-child { text-align: right; max-width: 140px }
    #ctnr-payment .v-col:last-child > div{ min-width: 100px !important }
    .row-payment{ 
        max-width: 800px;
        border-collapse: collapse !important; 
        border: 1px solid #CCC; 
        border-bottom: 0px !important; 
        background-color: #FFF; 
        margin: 0px 10px !important;
        display : flex;
        align-items : center;
    }
    @media screen and (max-width: 480px) {
      #ctnr-payment .v-col:last-child {
        text-align: center;
        max-width: fit-content;
      }
    }
</style>