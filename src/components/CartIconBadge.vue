<template>
    <router-link to="/cart" class="relative inline-block">
      <button class="cart-button">
        <span class="material-symbols-outlined">shopping_cart</span>
        <transition name="badge-pulse" mode="out-in">
          <div
            v-if="highlightNumber > 0"
            key="badge"
            class="badge"
          >
            {{ highlightNumber }}
          </div>
        </transition>
      </button>
    </router-link>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue'
  import { cart } from '@/stores/cart'
  
  const highlightNumber = ref(0)
  
  watch(
    cart,
    () => {
      highlightNumber.value = cart.value.reduce((sum, p) => sum + p.amount, 0)
    },
    { deep: true }
  )
  </script>
  
  <style scoped>
  .cart-button {
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 32px;
    padding: 8px;
  }
  .cart-button:hover {
    transform: scale(1.2);
  }
  
  .badge {
    position: absolute;
    top: -4px;
    right: -4px;
    background-color: hotpink; /* Tailwind: red-500 */
    color: white;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    transform: scale(1);
  }
  
  /* Pulse animation */
  .badge-pulse-enter-active {
    animation: pulse 0.3s ease;
  }
  .badge-pulse-leave-active {
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
  </style>
  