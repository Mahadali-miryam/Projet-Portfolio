<script setup>
import MyModal from '@/components/MyModal.vue';
import { ref } from 'vue';
import imageCV from '@/assets/image-CV.jpg';
import cahierdescharges from '@/assets/cahierdescharges.jpg';
import formulaire from '@/assets/formulaire.jpg';
import maquette from '@/assets/maquette.jpg';
import Header from '@/components/Header.vue';


const creations = ref([
  { title: "Curriculum Vitae", image: imageCV,  modalImage: maquette ,modalImage2: formulaire, description: "Curriculum Vitae Miryam Mahadali." },
  {title: "Cahier des charges", image: cahierdescharges, description: "Cahier des charges"},
  {title: "Formulaire", image: formulaire, description: "Dynamiser un espace formulaire"},
  { title: "Maquette MY HOMESPACE", image: maquette, description: "Maquette d'integration MY-HOMESPACE" },
]);
const modalOpen = ref(false);
   const selectedCreation = ref({});

   function openModal(creation) {
     selectedCreation.value = creation;
     modalOpen.value = true;
   }

   function closeModal() {
     modalOpen.value = false;
   }
</script>
<template>
    <Header />
  <main>
  <div id="realisations" class="creations-container">
  <!-- Boucle à travers les créations et affiche chaque création -->
  <div v-for="(creation, index) in creations" :key="index" class="creation">
    <img :src="creation.image" :alt="creation.title" @click="openModal(creation)" class="creation-image" />
      <p>{{ creation.title }}</p>
  </div>
  </div>
  <!-- Inclut la modale et passe les props nécessaires  -->
  <MyModal :creation="selectedCreation" :modalOpen="modalOpen" @closeModal="closeModal" />
</main> 
</template>

<style>
.creations-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; 
  padding: 40px 0; 
  background-color: #f7f7f7; 
 
}
.creation { 
  margin-bottom: 20px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease; 
}
.creation:hover {
  transform: translateY(-5px); 
}
.creation-image {
  width: 50%;  
  border-radius: 8px; 
}

/* Responsive design */
@media (max-width: 768px) {
  
  .creation {
    width: calc(50% - 20px); /* Deux créations par ligne sur les appareils mobiles */
  } 
}
</style>