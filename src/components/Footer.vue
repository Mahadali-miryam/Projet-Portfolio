<script setup>

import { ref } from 'vue';

/* 'ref' est utilisé pour créer une variable qui peut changer de valeur.*/
const lastUpdated = ref('');

/* On crée une variable 'lastUpdated' pour garder la date de mise à jour.*/
lastUpdated.value = `Dernière mise à jour : ${new Date().
toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}`;

</script>

<template> 

<footer>
<div class="social-icons">
  <a href="https://www.linkedin.com/in/miryam-mahadali-amirali-986223273" target="_blank">
    <img class="linkedin" src="@/assets/linkedin.png"  alt="logo linkedin"/>
  </a> 
  <a href="https://github.com/Mahadali-miryam " target="_blank">
  <img class="github" src="@/assets/github.png" alt="logo github"/>
  </a> 
</div>

<!-- Cette partie montre la date de mise à jour. 
La variable 'lastUpdated' change automatiquement la date ici. --> 

<div id="last-updated">{{ lastUpdated }}</div>

</footer>

</template>


<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #87CEEB;
  padding: 20px; 
}
.social-icons img:hover {
  opacity: 0.4;
}

    
#last-updated{
  color: #1C1B55;
  font-family: 'Montserrat', sans-serif; 

}

</style>