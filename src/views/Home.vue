<script setup>
import Header from '@/components/Header.vue';

</script>

<template>
  <Header/>
  
  <main>
 
    <h1>Bonjour et bienvenue sur mon portfolio!</h1>
    <p>
      Je m'appelle Miryam Mahadali, attirée par le monde du développement web.<br>
      Après une carrière enrichissante en tant que technicienne de laboratoire d'analyse médicale,<br> 
      j'ai décidé de me lancer dans une aventure palpitante : devenir développeuse fullstack.
      Actuellement en formation chez CEF,<br> je peaufine mes compétences en HTML, CSS, JavaScript,
      et bien d'autres technologies clés pour vous offrir des solutions web sur mesure.<br>
      Mon objectif est de créer des expériences utilisateurs captivantes et des sites web performants qui répondent parfaitement aux besoins de mes clients.<br>
      Avec un œil pour le détail et une approche créative, je suis prête à transformer vos idées en réalité digitale.<br>
      Découvrez mon portfolio pour un aperçu de mon univers où chaque pixel est imprégné de créativité.<br> 
      Si vous êtes prêt à donner vie à votre projet web, contactez-moi.<br>
      Ensemble, nous pouvons Créer, Coder, Conquérir - Votre univers web sans limites.   
    </p>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
body, html {
  font-family: 'Open+Sans', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #D2D2D2; 
}
 main{
  background-color: #F0F0F0;
  margin: auto;
  padding: 2rem;
  max-width: 800px; 
  margin: auto;
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
 }
 h1{
  font-family: 'Playfair Display', serif;
  color: #303030; 
  font-weight: 700;
  margin-bottom: 1rem
 }
 p {
  color: #696969; 
  line-height: 1.6;
  margin-bottom: 1rem;
}


/* Responsive design : assurez-vous que votre site est beau sur tous les appareils */
@media (max-width: 768px) {
  main {
    padding: 1rem;
  }
}

</style>
