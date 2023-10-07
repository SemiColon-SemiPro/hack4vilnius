<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer_app from './components/footerApp.vue'
import Header_app from './components/headerApp.vue'

// prepayment 3,6,12 months
</script>

<template>
  <header id="header">
    <Header_app />
  </header>

  <RouterView />
  <Footer_app />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 0%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
