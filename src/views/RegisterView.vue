<script setup>
import { ref, reactive } from 'vue'
import { useUsersStore } from '@/stores'

const visible = ref(false)
const form = ref(null)
const username = ref('')
const password = ref('')
const name = ref('')
const address = ref('')

const rules = reactive({
  required: (value) => !!value || 'Obrigatório.',
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'E-mail invalida'
  },
  nameLength: (value) => value.length >= 5 || 'O nome do usuário deve ter pelo menos 5 caracteres',
  addressLength: (value) => value.length >= 5 || 'O endereço deve ter pelo menos 5 caracteres',
  passwordLength: (value) => value.length >= 6 || 'A senha deve ter pelo menos 6 caracteres.',
  passwordNonAlphanumeric: (value) =>
    /[^\w\s]/.test(value) || 'A senha deve conter pelo menos um caractere não alfanumérico.',
  passwordDigit: (value) => /\d/.test(value) || 'A senha deve conter pelo menos um dígito (0-9).',
  passwordUppercase: (value) =>
    /[A-Z]/.test(value) || 'A senha deve conter pelo menos uma letra maiúscula (A-Z).',
  passwordMatch: (value) =>
    value === password.value || 'A senha e a confirmação de senha devem ser iguais.'
})

function onSubmit() {
  if (!form.value) return
  const userStore = useUsersStore()

  return userStore
    .register(username.value, password.value, name.value, address.value)
    .catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <div class="mt-6">
      <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
        <v-form v-model="form" @submit.prevent="onSubmit" id="login">
          <div class="text-subtitle-1 text-medium-emphasis">Nome</div>
          <v-text-field
            density="comfortable"
            placeholder="Nome do usuário"
            :rules="[rules.required, rules.nameLength]"
            prepend-inner-icon="mdi-account-box-outline"
            variant="outlined"
            name="name"
            v-model="name"
            hint="Digite nome completo do usuário"
            persistent-hint
          ></v-text-field>
          <div class="text-subtitle-1 text-medium-emphasis">Endereço</div>
          <v-text-field
            density="comfortable"
            placeholder="Endereço do usuário"
            :rules="[rules.addressLength]"
            prepend-inner-icon="mdi-map-marker-outline"
            variant="outlined"
            name="address"
            v-model="address"
            hint="Digite o endereço do usuário"
          ></v-text-field>
          <div class="text-subtitle-1 text-medium-emphasis">E-mail</div>
          <v-text-field
            density="comfortable"
            placeholder="Email do usuário"
            :rules="[rules.required, rules.email]"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            name="username"
            v-model="username"
            hint="Digite o seu endereço de e-mail válido (por exemplo, exemplo@email.com)."
            persistent-hint
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
            :rules="[
              rules.required,
              rules.passwordLength,
              rules.passwordNonAlphanumeric,
              rules.passwordDigit,
              rules.passwordUppercase
            ]"
            @click:append-inner="visible = !visible"
            name="password"
            v-model="password"
            hint="Digite uma senha segura contendo pelo menos 6 caracteres, incluindo letras maiúsculas, números e caracteres não alfanuméricos."
            persistent-hint
          ></v-text-field>
          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Confirme a senha
          </div>
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="comfortable"
            placeholder="Confirme sua senha"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            :rules="[rules.required, rules.passwordMatch]"
            @click:append-inner="visible = !visible"
            name="confirmPassword"
            v-model="confirmPassword"
            hint="Digite a mesma senha novamente para confirmar."
            persistent-hint
          ></v-text-field>
          <v-btn :disabled="!form" block class="mb-8" size="large" color="info" type="submit">
            Inscrever-se
          </v-btn>
        </v-form>
        <v-card-text class="text-center">
          <RouterLink class="text-blue text-decoration-none" to="/login">
            Já tem uma conta? Entrar <v-icon icon="mdi-chevron-right"></v-icon>
          </RouterLink>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
