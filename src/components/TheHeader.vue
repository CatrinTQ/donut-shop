<script setup lang="ts">
import { ref } from 'vue'

const isHovered = ref(false)

const defaultImg = new URL('../img/home-logo.png', import.meta.url).href
const hoverImg = new URL('../img/home-logo-blink.png', import.meta.url).href 

</script>

<template>
<header>
  <h1>Kawaii Donut</h1>

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
  />

  <div>
    <button class="cart-button">
      <span class="material-symbols-outlined">
        shopping_cart
      </span>
    </button>

    <span>
      0 kr
    </span>
  </div>

  <!-- Menu Button -->
  <nav>
    <button class="menu-button" aria-label="Open menu button" aria-expanded="false">
      <span class="menu-span"></span>
      <span class="menu-span"></span>
      <span class="menu-span"></span>
    </button>
  </nav>

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
}

h1 {
  margin: 0;
  padding: 0;
  min-width: 100vw;
  text-align: center;
}

.menu-span {
  display: block;
  width: 40px;
  height: 5px;
  background-color: black;
  border-radius: 1rem;
  margin-bottom: 0.25rem;
}

.menu-button {
  background-color: whitesmoke;
  border: none;
}

.cart-button {
  border: none;
  background-color: whitesmoke;
}

.material-symbols-outlined {
  padding: 0;
  margin: 0;
}

.logo-image {
  padding: 0.5rem;
}

</style>