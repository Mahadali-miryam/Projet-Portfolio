<script setup>
/*Permet au composant d'émettre l'événement 'closeModal'*/
const emit = defineEmits(['closeModal']);

/*Déclare les props reçues du composant parent*/
const props = defineProps({
  creation: Object,
  modalOpen: Boolean /*Contrôle l'affichage de la modale*/
});

/*Appelé quand on veut fermer la modale*/
function closeModal() {
  emit('closeModal');
}
</script>

<template>
<!-- La modale ne s'affiche que si modalOpen est true -->
<div v-if="modalOpen" class="modal" @click.self="closeModal">
  <div class="modal-content">
  <!-- Bouton pour fermer la modale -->
    <button @click="closeModal" class="close-button">&times;</button>
  <h2>{{props.creation.title }}</h2>
  
  <div class="images-container"> 
    <img :src="props.creation.modalImage" :alt="props.creation.title" class="modal-image" />
    <img v-if="props.creation.modalImage2" :src="props.creation.modalImage2" :alt="props.creation.title" class="modal-image" />
  </div> 
    <!-- Contenu de la modale -->
  <ul class="infos">
    <li v-for="detail in props.creation.details" :key="detail.label">
      {{ detail.label }}: {{ detail.value }}
    </li>
  </ul>    
  <a v-if="props.creation.github" :href="props.creation.github" target="_blank" class="github-link">Voir sur GitHub</a>
  </div>
</div>
</template>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  top: 510px;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  background-color: rgba(210, 210, 210, 0.5); 
  width: 80%; 
  height: 70%; 
}
.modal-content {
  background-color:#faf9f6;  
  max-width: 800px;
  position: relative;
  padding: 10px;
  text-align: center; 
}
.modal-content p {
  text-align: left;
}
.images-container {
  display: flex;
  justify-content: center; 
  gap: 20px; 
  padding: 5px 50px;
  margin-bottom:20px ;
  
}

.modal-image {
  width:300px; 
  height: auto;
  display: block;  
}
.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  background: #FFD700; 
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
}
li::before {
  content: '•'; 
  color: #FFD700; 
  font-weight: bold;
  margin-right: 8px;
  position: relative;
  
}
li {
    list-style-type: none;
    margin: 10px 30px;
    padding: 10px;
    font-size: 19px;
}
.github-link {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #FFD700;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.github-link:hover {
  background-color:#87CEEB ;
  color: #333;
}

/* Vous pouvez également ajouter des styles pour les icônes si vous en utilisez */
.github-icon {
  margin-right: 5px;
}
@media (max-width: 768px) {
.modal-image {
  width:170px; 
  height: auto;
  display: block;  
}
.close-button {
  position: fixed; 
    top: 16px; 
    right: 16px; 
    z-index: 1000;
}
}
</style>