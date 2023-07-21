<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore } from '@/stores';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();

usersStore.getAll();
</script>

<template>
    <div>
        <h1>Hi {{authUser?.firstName}}!</h1>
        <p>You're logged in with Vue 3 + Pinia & JWT!!</p>
        <h3>Users from secure api end point:</h3>
     </div>
</template>
