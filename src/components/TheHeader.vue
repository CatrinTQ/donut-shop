<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { cart } from '@/stores/cart'
import CartIconBadge from './CartIconBadge.vue'
import SidebarMenu from './SidebarMenu.vue'

const isHovered = ref(false)
const isMenuOpen = ref(false)

const defaultImg = '/donut-shop/img/home-logo.png'
const hoverImg = '/donut-shop/img/home-logo-blink.png'

const router = useRouter()

const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.amount, 0)
})

function goToHome() {
  router.push('/')
}
</script>

<template>
  <header>
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
      <span>{{ totalPrice }} kr</span>
    </div>

    <!-- Menyknapp -->
    <button
      class="menu-button"
      aria-label="Open menu"
      @click="isMenuOpen = true"
    >
      <span class="menu-span"></span>
      <span class="menu-span"></span>
      <span class="menu-span"></span>
    </button>
  </header>

  <!-- Sidomeny-komponent med fade-in/out -->
  <SidebarMenu :show="isMenuOpen" @closed="isMenuOpen = false" />
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
  position: relative;
  z-index: 10;
}

.menu-span {
  display: block;
  height: 4px;
  width: 40px;
  background-color: hotpink;
  border-radius: 9999px;
  margin-top: 6px;
  transition: all 0.3s ease;
}

.menu-button {
  position: relative;
  margin-top: 2px;
  margin-right: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-button:hover .menu-span:nth-child(1) {
  transform: translateX(-8px);
}
.menu-button:hover .menu-span:nth-child(2) {
  opacity: 0.5;
}
.menu-button:hover .menu-span:nth-child(3) {
  transform: translateX(-16px);
  
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
