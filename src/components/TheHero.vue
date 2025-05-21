<template>
    <div class="hero-wrapper">
      <img src="/img/background.png" alt="Bakgrundsbild" class="hero-image" />
      <div class="hero-text">Kawaii Donut</div>
    </div>
  </template>
  
  <style scoped>
  .hero-wrapper {
    position: relative;
    width: 100vw;
    max-height: 300px;
    overflow: hidden;
  }
  
  .hero-image {
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    display: block;
  }
  
  /* Centrera text över bilden */
  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    color: transparent;
    background: linear-gradient(90deg, rgb(162, 2, 82), hotpink);
    background-clip: text;
    -webkit-background-clip: text;
    white-space: nowrap;
  }
  
  /* Glimmer-effekt */
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  </style>
  