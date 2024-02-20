<script setup>
import {RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

</script>

<template>

<main id="main"> 
<RouterView/> 
</main>

<footer>
  <Footer />
</footer>
 
</template>

<style scoped>

        
</style>
