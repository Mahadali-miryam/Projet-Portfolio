<script setup>
// Fonction pour émettre l'événement closeModal
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
  <!-- Contenu de la modale -->
    <h2>{{ creation.title }}</h2>
      <img :src="creation.image" :alt="creation.title" class="modal-image" />
      <p>{{ creation.description }}</p>
      <p>Informations supplémentaires :</p>
        <ul>
          <li>Date de création:sept 2023 {{ creation.date }}</li>
          <li>Technologies utilisées :html,css {{ creation.technologies }}</li>   
        </ul>

    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  background-color: rgba(210, 210, 210, 0.5); 
  width: 60%; 
  height: 60%; 
}
.modal-content {
  background-color: #fff; 
  padding: 20px;
  width: 80%;
  max-width: 600px;
  position: relative;
}
.modal-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin-bottom: 20px;
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
</style>