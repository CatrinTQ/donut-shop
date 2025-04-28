<script setup lang="ts">
    import { ref } from 'vue'
    const selectedOption = ref<string>('')
</script>

<template>
    <form class="form-container">
      <div class="form-item">
        <label for="name">Förnamn</label>
        <input type="text" id="firstname" name="firstname" required />
      </div>
      <div class="form-item">
        <label for="name">Efternamn</label>
        <input type="text" id="lastname" name="lastname" required />
      </div>
      <div class="form-item">
        <label for="name">Gatuadress</label>
        <input type="text" id="address" name="address" required />
      </div>
      <div class="form-item">
        <label for="name">Postnummer</label>
        <input type="text" id="postalnumber" name="postalnumber" required />
      </div>
      <div class="form-item">
        <label for="name">Postadress</label>
        <input type="text" id="postaddress" name="postaddress" required />
      </div>
      <div class="form-item">
        <label for="email">E-post</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-item-checkbox">
        <label for="gdpr">Godkänn behandling av GDPR</label>
        <input type="checkbox" id="gdpr" name="gdpr" required />
      </div>
      <div class="form-item-checkbox">
        <label for="newsletter">Få vårat nyhetsbrev</label>
        <input type="checkbox" checked id="newsletter" name="newsletter" />
      </div>

      <div class="form-item-checkbox">
        <h2>Betalningsalternativ</h2>

        <div class="radio-option">
        <input type="radio" v-model="selectedOption">
        <label for="option1">Kort</label>
        </div>

        <div class="radio-option">
        <input type="radio" v-model="selectedOption">
        <label for="option2">Faktura</label>
        </div>
    </div>
      
      <div class="form-item submit-item">
        <router-link to="/confirmation">
          <button type="submit">Betala</button>
        </router-link>
      </div>
    </form>
  </template>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
}

.form-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

label {
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical; /* Tillåt vertikal resizing */
  min-height: 100px;
}

.submit-item {
  display: flex;
  justify-content: center;
}

button {
  padding: 0.8rem 1.5rem;
  background-color: hotpink;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ff3399;
}
</style>