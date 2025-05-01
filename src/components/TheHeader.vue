<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { cart } from '@/stores/cart';
import { computed } from 'vue';
import CartIconBadge from './cartIconBadge.vue';

const isHovered = ref(false)

const defaultImg = '/donut-shop/img/home-logo.png'
const hoverImg = '/donut-shop/img/home-logo-blink.png'

const router = useRouter()

// Beräkna totalsumman
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.amount, 0);
});

function goToHome() {
  router.push('/') // Navigera till startsidan
}

</script>

<template>
<header>
  <h1>Kawaii Donut :)</h1>

    <img
    :src="isHovered ? hoverImg : defaultImg"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  
    id="logo"
    class="logo-image"
    alt="tecknad munk med rosa frosting som ler."
    width="150"
    height="150"
    loading="eager"
    @click="goToHome"
    />
  <div class="cart">
    <CartIconBadge />
    <span>
      {{ totalPrice }} kr
    </span>
  </div>

  <!-- Menu Button -->
   <router-link to="/menu">
     <nav>
       <button class="menu-button" aria-label="Open menu button" aria-expanded="false">
         <span class="menu-span"></span>
         <span class="menu">meny</span>
         <span class="menu-span"></span>
         <span class="menu-span"></span>
       </button>
     </nav>
   </router-link>

</header>
</template>

<style scoped>

header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  color: hotpink;
  margin: 0;
  padding: 0;
  min-height: 20vh;
}

h1 {
  margin: 0;
  padding: 0;
  min-width: 100vw;
  text-align: center;
}

.menu-span {
  display: block;
  height: 4px;
  width: 24px;
  background-color: hotpink;
  border-radius: 9999px;
  margin-top: 6px;
  transition: all 0.3s ease; /* smooth animation */
}

.menu-button {
  position: relative;
  margin-right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}


/* Hover effekt på hela knappen */
.menu-button:hover .menu-span:nth-child(1) {
  transform: translateX(-8px); /* förflyttar första strecket till vänster */
}

.menu-button:hover .menu-span:nth-child(3) {
  opacity: 0.5; /* andra strecket blir lite genomskinligt */
}

.menu-button:hover .menu-span:nth-child(4) {
  transform: translateX(-16px); /* tredje strecket flyttas ännu mer */
}

.cart-button {
  border: none;
  background-color: whitesmoke;
  cursor: pointer;
}

.material-symbols-outlined {
  padding: 0;
  margin: 0;
}

.logo-image {
  padding: 0.5rem;
  cursor: pointer;
}


.cart {
  display: flex;
  align-items: center;
}

</style>