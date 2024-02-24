<template>
  <Header/>
<main>
  <section class="introduction">
    <h1>Bonjour et bienvenue sur mon portfolio!</h1>
    <h2>JE SUIS MIRYAM MAHADALI<br>DEVELOPPEUSE WEB</h2>
      <p>Plongez dans mon espace numérique où la technologie et la créativité se rencontrent pour donner vie à des projets web uniques.<br>
        Découvrez mes réalisations et mes compétences .</p>
  </section>
  </main>

</template>

<script setup>
import Header from '@/components/Header.vue';

</script>

<style scoped>

body, html {
  margin: 0;
  padding: 0; 
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 70vh; 
  background-color: #F2F2F2;
}
.introduction {
  text-align: center; 
  max-width: 800px;
  margin-top: 0px;
  height: 600px;
}
 
h1 {
  color: #303030; 
  margin-bottom:1rem;
  font-weight: 400;
 
}
h2 {
  font-family: 'Playfair Display', serif;
  color: #303030; 
  margin-bottom: 1rem;
 
}
p {
  color: #696969; 
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Responsive design */
@media (max-width: 768px) {
  
h1, h2 {
  font-size: smaller; 
}
}
</style>