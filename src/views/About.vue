
<template>
 <main>
  <h1 class="titre-presentation">PRESENTATION</h1>
    <p>
      Je m'appelle Miryam Mahadali, fascinée par le monde du développement web.<br>
      Après une carrière enrichissante en tant que technicienne de laboratoire d'analyse médicale,<br> 
      j'ai décidé de me lancer dans une aventure palpitante : devenir<strong> développeuse web</strong>.
      <br>Je peaufine mes compétences en<strong> HTML, CSS, JavaScript,</strong>
      et bien <strong>d'autres technologies clés</strong> pour vous offrir des solutions web sur mesure.<br>
      Mon objectif est de créer des expériences utilisateurs captivantes et des sites web performants qui répondent parfaitement aux besoins de mes clients.<br>
      Avec un œil pour le détail et une approche créative, je suis prête à transformer vos idées en réalité digitale.<br>
      Découvrez mon portfolio pour un aperçu de mon univers où chaque pixel est imprégné de créativité.<br> 
      Si vous êtes prêt à donner vie à votre projet web, contactez-moi.<br>
      <span class="bold-text">Ensemble, nous pouvons Créer, Coder, Conquérir - Votre univers web sans limites.</span>   
    </p>
 </main>
</template>

<style scoped>
main {
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  max-width: 800px;
  margin: 100px auto;
  padding: 2rem;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 90px;
}

.titre-presentation {
  font-size: 2rem;
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  width: 100%;
  margin-bottom: 1.5rem;
  font-family: "Poppins", sans-serif;
}

p {
  margin-bottom: 1rem;
  color: #333;
  line-height: 1.6;
}
.bold-text { 
  font-weight: bold;
  font-family: "Poppins", sans-serif; 
  font-size: 800;
}
strong{
  font-style: italic
}

@media (max-width: 768px) {
  main {
    margin: 50px auto; 
    padding: 1rem; 
    max-width: 100%; 
  }

  p {
    margin-bottom: 0.5rem; 
    font-size: 0.9rem; 
  }
}
</style>