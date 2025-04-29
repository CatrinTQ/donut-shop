<script setup lang="ts">
import { cart } from '@/stores/cart';
import { products } from '@/data/products';

function printRatingStar(rating: number): string {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let stars = '';

  for (let i = 0; i < fullStars; i++) {
    stars += `<img src="/donut-shop/public/img/rating-donut.png" width="20" height="20" alt="rating star shaped like a donut" />`;
  }

  if (hasHalfStar) {
    stars += `<img src="/donut-shop/public/img/rating-donut-half.png" width="20" height="20" alt="half rating star shaped like a donut" />`;
  }

  return stars;
}

// ➕ Lägg till produkt i varukorgen
function increaseAmount(productId: number) {
  const productInCart = cart.value.find(item => item.id === productId);

  if (productInCart) {
    productInCart.amount += 1;
  } else {
    const product = products.find(item => item.id === productId);
    if (product) {
      cart.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1,
      });
    }
  }
}

// ➖ Minska produkt i varukorgen
function decreaseAmount(productId: number) {
  const productInCart = cart.value.find(item => item.id === productId);

  if (productInCart) {
    productInCart.amount -= 1;
    if (productInCart.amount === 0) {
      cart.value = cart.value.filter(item => item.id !== productId);
    }
  }
}

// Hämta hur många av en viss produkt som finns i varukorgen
function getAmount(productId: number) {
  const productInCart = cart.value.find(item => item.id === productId);
  return productInCart ? productInCart.amount : 0;
}
</script>

<template>
  <div class="cards-container">
    <div class="card" v-for="donut in products" :key="donut.id">
      <img :src="donut.img.url" :width="donut.img.width" :height="donut.img.height" />
      <div>
        <h2>{{ donut.name }}</h2>
        <p>Pris: {{ donut.price }} kr</p>
        <p class="rating">
          Betyg: <span v-html="printRatingStar(donut.rating)"></span>
        </p>
        <div class="button-container">
          <button class="product-button" @click="decreaseAmount(donut.id)">-</button>
          <p class="amount">{{ getAmount(donut.id) }} st</p>
          <button class="product-button" @click="increaseAmount(donut.id)">+</button>
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
  justify-content: start;
  padding: 2rem;
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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
