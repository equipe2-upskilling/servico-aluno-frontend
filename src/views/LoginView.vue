<script setup>
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/stores'
import { RouterLink } from 'vue-router'

const visible = ref(false)
const form = ref(null)
const username = ref('')
const password = ref('')

const rules = reactive({
  required: (value) => !!value || 'Obrigatório.',
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'E-mail invalida'
  }
})

function onSubmit() {
  if (!form.value) return
  const authStore = useAuthStore()

  return authStore.login(username.value, password.value).catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <div class="mt-6">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>

        <v-form v-model="form" @submit.prevent="onSubmit" id="login">
          <v-text-field
            density="comfortable"
            placeholder="Email do usuário"
            :rules="[rules.required, rules.email]"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            name="username"
            v-model="username"
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Senha
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="comfortable"
            placeholder="Digite sua senha"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            :rules="[rules.required]"
            @click:append-inner="visible = !visible"
            name="password"
            v-model="password"
          ></v-text-field>

          <v-btn :disabled="!form" block class="mb-8" size="large" color="info" type="submit">
            Entrar
          </v-btn>
        </v-form>
        <v-card-text class="text-center">
          <RouterLink class="text-blue text-decoration-none" to="/register">
            Inscrever-se <v-icon icon="mdi-chevron-right"></v-icon>
          </RouterLink>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
