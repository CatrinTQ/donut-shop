<script setup lang="ts">

</script>

<template>
    <div class="menu-container">
        <router-link to="/" class="menu-link">Hem</router-link>
        <router-link to="/cart" class="menu-link">Varukorgen</router-link>
    </div>
</template>

<style lang="css" scoped>
    .menu-container {
        background-color: lightpink;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        min-height: 60vh;
    }

    .menu-link {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 10px;
        text-transform: uppercase;      
    }
</style>