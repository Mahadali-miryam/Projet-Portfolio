<script setup>
import {RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<template>
  
<main id="main">
  <header>
    <Header/>
  </header>

<RouterView/> 
</main>

<footer>
  <Footer />
</footer>
 
</template>

<style scoped>

        
</style>
