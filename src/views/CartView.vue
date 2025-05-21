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
    
    <div v-if="cart.length > 0">
      <h2>Varukorg</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.amount }} st - {{ item.price * item.amount }} kr
        </li>
      </ul>

      <div class="summary">
        <p><strong>Totalt antal produkter:</strong> {{ totalItems }} st</p>
        <p><strong>Frakt:</strong> 50 kr</p>
        <p><strong>Totalt pris:</strong> {{ totalPrice + 50 }} kr</p>
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
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.summary {
  margin-top: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
}

h2 {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}


button {
    padding: 0.8rem 1.5rem;
    background-color: hotpink;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 2rem;
    align-self: center;
}

button:hover {
    background-color: #ff3399;
}
</style>
