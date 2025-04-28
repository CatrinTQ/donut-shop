<script setup lang="ts">
import { products } from '@/data/products';

function printRatingStar(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';

  for (let i = 0; i < fullStars; i++) {
    stars += `<img src="/src/img/rating-donut.png" width="20" height="20" alt="rating star shaped like a donut" />`;
  }

  if (hasHalfStar) {
    stars += `<img src="/src/img/rating-donut-half.png" width="20" height="20" alt="half rating star shaped like a donut" />`;
  }

  return stars;
}
</script>

<template>
    <div class="cards-container">
        <div class="card" v-for="donut in products" :key="donut.id">
            <img :src="donut.img.url" :width="donut.img.width" :height="donut.img.height">        
            <div>
                <h2>{{ donut.name }}</h2>
                <p>Pris: {{ donut.price }}</p>
                <p class="rating">Betyg: <span v-html="printRatingStar(donut.rating)"></span></p>
                <div class="button-container">
                    <button class="product-button">-</button>
                    <p class="amount">0 st</p>
                    <button class="product-button">+</button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  justify-content: start; /* 👈 detta gör sista raden vänsterjusterad */
  padding: 2rem;
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Två kolumner: text och bild */
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 1rem;
  max-width: 300px;
  gap: 1rem;
  background: white;
  margin: 5px;
  padding: 5px;
  padding-bottom: 5px;
}

.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

.button-container {
    display: flex;
    gap: 5px;
    align-items: center;
}

.product-button {
    width: 40px;
    height: 40px;
    background-color: black;
    color: white;
    border-radius: 10px;
    font-size: 32px;
    border: none;
    text-align: center;
    align-self: center;
}

.product-button:hover {
    transform: scale(1.1);
}

.rating {
    display: flex;
    min-width: 160px;
}

.amount {
    width: 40px;
    text-align: center;
}
</style>
