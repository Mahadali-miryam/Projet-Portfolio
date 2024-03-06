<script setup>
import MyWorks from '../views/MyWorks.vue';
import About from '../views/About.vue'; 
import Contact from '../views/Contact.vue';
</script>
<template>

<main>
    <section class="introduction">
      <h1>Bonjour et bienvenue sur mon portfolio!</h1>
      <h2>JE SUIS MIRYAM MAHADALI<br>DEVELOPPEUSE WEB</h2>
        <p>Plongez dans mon espace numérique où la technologie et la créativité se rencontrent pour donner vie à des projets web uniques.<br>
        Découvrez mes réalisations et mes compétences .</p>
    </section>
   
    <section class="about-section">
        <About/>
    </section>
    <section class="my-works-section">
        <MyWorks/>
    </section>
    <section  class="contact-section">
        <Contact/>
    </section>
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
  max-height: 1900vh;
  margin: 2rem auto;
  padding: 2rem; 
}

.section {
  text-align: center;
  max-width: 900px;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 90px; /* Même marge pour toutes les sections */
  padding: 2rem; /* Uniform padding */
}

h1, h2 {
  color: #303030;
}

h1 {
  font-weight: 400;
  margin-bottom: 0.5rem;
}

h2 {
  margin-bottom: 1rem;
  color:#FFD700; ;
}

p {
  color: #696969;
  margin-bottom: 1rem;
}

/* Responsive design */
@media (max-width: 768px) {
  .section {
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