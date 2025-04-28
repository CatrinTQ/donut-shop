// src/stores/cart.ts
import { ref } from 'vue';

export const cart = ref<{ id: number; name: string; price: number; amount: number }[]>([]);
