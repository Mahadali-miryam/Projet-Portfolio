<script setup>
import {ref} from 'vue';

/*Pour gérer l'affichage du menu burger sur les mobiles*/
const state = ref(false);

/*Fonction pour fermer le menu burger*/
const toggleMenu = () => {
  state.value = !state.value;
};

/*liste des liens. Ajouter ou modifiez des objets dans ce tableau pour mettre à jour le menu*/
const links = ref([
  {name:'Accueil',path:'/'},
  {name:'Présentation',path: 'presentation'},
  {name:'Réalisations',path: '/réalisations'},
  {name:'Contact',path: 'contact'},
]);
/*Fonction pour fermer le menu lorsque vous cliquez sur un lien*/
const closeMenu = () => {
  state.value = false;
};
</script>

<template>
  <header>
    <!--Logo qui, en clic, redirige vers la page d'accueil grace au router-link-->
    <div class="logo">
      <router-link to="/"> 
        <img src="@/assets/logo Miryam.png" width="125" height="125" alt="logo Miryam"/>
      </router-link>
    </div>
    
    <!-- Menu burger pour les appareils mobiles-->
    <div class="burger" @click="state = !state" :class="{'burger-active': state}">
      <div class="trait"></div> 
      <div class="trait"></div>
      <div class="trait"></div>
    </div>

    <!--Contenu du menu burger qui s'affiche lorsque l'état "state" est vrai (menu ouvert)-->
    <div class="menu-burger" :class="{'active': state}">
    
    <ul>
    <!--Boucle sur les liens de navigation pour afficher le menu-->
    <li v-for="(link, index) in links" :key="index" @click="closeMenu">
    <router-link :to="link.path">{{ link.name }}</router-link>
    </li>
    </ul> 
    </div>

    <!--Menu principal pour les écrans de bureau(menu desktop)-->
    <ul class="links">
     <li v-for="(link, index) in links" :key="index">
    <router-link :to="link.path">{{ link.name }}</router-link></li>
    
    </ul>
   
  </header>
</template>

<style scoped>

/*Structure de base du header */
header{
  display: flex;
  align-items: center;
  background-color:#1C1B55;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: auto;
  position: sticky;
  top: 0;
  z-index: 3;
}

/* Style des barres du menu burger */
.trait {
  height: 3px;
  width: 23px;
  background-color:#FFD700;
  margin-bottom: 3px;
}
/*Positionnement et visibilité du menu burger*/ 
.menu-burger{
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0px;
  left: 100%;
  background-color:#f2f2f2f2 ;
  transition: 0.3s;/*Animation pour l'apparition du menu*/ 
  display: flex;
  justify-content: center;
  align-items: center; 
   
}
.burger-active{
  z-index: 2;
  position: fixed;  
  right: 20px; 
}
/*Apparence du menu burger lorsqu'il est actif*/
.active{
  left: 0%; /*Apparition du menu à gauche*/
 
}

/*Effet au survol pour les liens */
li:hover{
  background-color:#FFD700;
}
.links{
  display:none;
}

/* Masquage des liens sur mobile et affichage en flex sur desktop */
@media screen and (min-width: 780px){
.burger{
  display: none;
}

.links{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%; 
}

/*Effet de survol sur les liens */
.links li:active {
  background-color:  #FFD700;
  color:#FF6B6B;
  cursor: pointer;  
  transform: scale(1.05); /*indique un élément cliquable */
  transition: transform 0.3s,background-color 0.3s; /* Anime les changements */
  border-radius: 10px;
}
.logo{
  cursor: pointer;
  margin-left: 50px;

}
.logo:hover {
  opacity: 0.5;
}

}
</style>