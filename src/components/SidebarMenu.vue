<template>
    <transition name="overlay-fade" @after-leave="$emit('closed')">
      <div v-if="isVisible" class="overlay">
        <div class="backdrop" @click="closeMenu"></div>
  
        <transition name="menu-slide">
          <div class="menu">
            <button class="close-btn" @click="closeMenu">✕</button>
            <div class="menu-link-container">
              <router-link to="/" class="menu-link" @click="closeMenu">Hem</router-link>
              <router-link to="/cart" class="menu-link" @click="closeMenu">Varukorg</router-link>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps } from 'vue'
  
  const props = defineProps({
    show: Boolean
  })
  
  const isVisible = ref(false)
  
  watch(() => props.show, (newVal) => {
    if (newVal) {
      isVisible.value = true
    } else {
      isVisible.value = false
    }
  })
  
  function closeMenu() {
    isVisible.value = false
  }
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    z-index: 999;
  }
  
  /* Bakgrund */
  .backdrop {
    flex-grow: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  /* Meny */
  .menu {
    width: 280px;
    background-color: lightpink;
    height: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1001;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
  }
  
  .menu-link-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 150px;
  }
  
  .close-btn {
    align-self: flex-end;
    font-size: 1.5rem;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
  
  .menu-link {
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .menu-link:hover {
    transform: scale(1.2);
    font-weight: 700;
  }
  
  /* Övergripande fade (overlay) */
  .overlay-fade-enter-active, .overlay-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .overlay-fade-enter-from, .overlay-fade-leave-to {
    opacity: 0;
  }
  .overlay-fade-enter-to, .overlay-fade-leave-from {
    opacity: 1;
  }
  
  /* Slide in höger för menyn */
  .menu-slide-enter-active, .menu-slide-leave-active {
    transition: transform 0.3s ease;
  }
  .menu-slide-enter-from {
    transform: translateX(100%);
  }
  .menu-slide-enter-to {
    transform: translateX(0);
  }
  .menu-slide-leave-from {
    transform: translateX(0);
  }
  .menu-slide-leave-to {
    transform: translateX(100%);
  }
  </style>
  