<script setup>

</script>

<template>
  <v-card id="payment-detail" align="center">
    <v-container>
      <v-row>
        <v-col cols="12" style="padding: 0px">
          <div><v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" width="200px" cover></v-img></div>
        </v-col>
        <v-col cols="12">
          <h2>Curso tal</h2>
          <!--div>Descrição</div-->
          <div class="course-price"><v-text-field readonly variant="outlined" label="Total à pagar" model-value="R$ 50,00"></v-text-field></div>
        </v-col>
      </v-row>
      <v-row class="btn-bar">
        <v-col>
          <RouterLink class="text-blue text-decoration-none" to="/inscricao">
              <v-btn 
                  block
                  class="text-none mb-4"
                  color="indigo-darken-2"
                  size="x-large"
                  variant="outlined"
                  outlined> Voltar </v-btn>
          </RouterLink>
        </v-col>
        <v-col>
          <RouterLink class="text-blue text-decoration-none" to="/gerar-boleto">
              <v-btn 
                  block
                  class="text-none mb-4"
                  color="indigo-darken-2"
                  size="x-large"
                  variant="flat"
                  outlined> Gerar boleto </v-btn>
          </RouterLink>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<style>
  #payment-detail{ margin-top: 10px; padding: 12px }
  #payment-detail .course-price{ margin-top: 10px; max-width: 200px }
  #payment-detail label{ font-size: 18px; }
  #payment-detail .v-field__input{ font-size: 24px; font-weight: bold }
  #payment-detail .v-field__input > input{ text-align: right }
  #payment-detail .v-input__details{ display: none }
  #payment-detail .v-btn{ max-width: 200px !important; min-width: 200px !important }
  @media screen and (min-width: 505px) {
    #payment-detail .btn-bar .v-col:first-child{
      text-align: right;
      text-align: -webkit-right;
    }
    #payment-detail .btn-bar .v-col:last-child{
      text-align: left;
      text-align: -webkit-left;
    }
  }
</style>