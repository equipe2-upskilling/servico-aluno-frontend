import { defineStore } from 'pinia';

import { fetchWrapper,router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        user: {}
    }),
    actions: {
        async register(email, password, confirmPassword) {
            
            const user = await fetchWrapper.post(`${baseUrl}/register`, { email, password, confirmPassword });
            this.user = user;

            localStorage.setItem('user', JSON.stringify(user));
           
            router.push(this.returnUrl || '/Dashboard');
        }
    }
});
