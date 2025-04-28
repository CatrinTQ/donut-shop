<script setup lang="ts">
import { cart } from '@/stores/cart';
import { computed } from 'vue';

// Beräkna totalsumman
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.amount, 0);
});

// Beräkna totala antalet produkter
const totalItems = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.amount, 0);
});
</script>

<template>
  <div class="cart-container">
    <h1>Varukorg</h1>

    <div v-if="cart.length > 0">
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.amount }} st - {{ item.price * item.amount }} kr
        </li>
      </ul>

      <div class="summary">
        <p><strong>Totalt antal produkter:</strong> {{ totalItems }}</p>
        <p><strong>Totalt pris:</strong> {{ totalPrice }} kr</p>
      </div>

      <router-link to="/Form">
          <button>Gå till kassan</button>
      </router-link>
    </div>

    <div v-else>
      <p>Din varukorg är tom.</p>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
    min-height: 60vh;
    margin-left: 200px;
    padding: 2rem;
}

.summary {
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
