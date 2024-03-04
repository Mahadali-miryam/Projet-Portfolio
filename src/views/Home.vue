<script setup>
import Header from '@/components/Header.vue';

</script>

<template>
<Header/>
<main>
  <section class="introduction">
    <h1>Bonjour et bienvenue sur mon portfolio!</h1>
    <h2>JE SUIS MIRYAM MAHADALI<br>DEVELOPPEUSE WEB</h2>
      <p>Plongez dans mon espace numérique où la technologie et la créativité se rencontrent pour donner vie à des projets web uniques.<br>
        Découvrez mes réalisations et mes compétences .</p>
  </section>
 <MyWorks/>
 <Contact/>
  
</main>
  
</template>

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
  min-height: 80vh;
  background-color: #F2F2F2; 
}

.introduction {
  text-align: center;
  max-width: 800px;
  margin-top: 0px;
}

h1 {
  color: #303030; 
  font-weight: 400;
}

h2 {
  font-family: 'Playfair Display', serif;
  color: #303030; 
  margin-bottom: 1rem;
}

p {
  color: #696969; 
  margin-bottom: 1rem;
}

/* Responsive design */
  @media (max-width: 768px) {
  .introduction {
    padding: 1rem; 
    margin-top: 10px;
  }

  h1 {
    font-size: 1.5rem; 
    margin-bottom: 0.5rem; 
  }

  h2 {
    font-size: 1.2rem; 
    margin-bottom: 0.5rem; 
  }

  p {
    font-size: 0.9rem; 
    margin-bottom: 0.5rem; 
  }
}
  
</style>
