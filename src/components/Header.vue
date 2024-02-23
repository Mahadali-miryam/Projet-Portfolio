<script setup>
import {ref} from 'vue';
/*Pour gérer l'affichage du menu burger sur les mobiles*/

const state = ref(false);

/*liste des liens. Ajouter ou modifiez des objets dans ce tableau pour mettre à jour le menu*/
const links = ref([
  {name:'Accueil',path:'/'},
  {name:'Présentation',path:'presentation'},
  {name: 'Réalisations',path: 'MyWorks'},
  {name:'Contact',path: 'contact'}
]);

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
    <li v-for="(link, index) in links" :key="index">
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
  background-color:#F2F2F2 ;
  transition: 0.3s;/*Animation pour l'apparition du menu*/ 
 
}
.burger-active{
  z-index: 2; 
}
/*Apparence du menu burger lorsqu'il est actif*/
.active{
  left: 0%; /*Apparition du menu à gauche*/
 
}

/*Effet au survol pour les liens */
li:hover{
  background-color:#FF6B6B; 
  color: #FFD700;
}
.links{
  display:none;
}
/* Pour les liens non visités sur mobile */
.menu-burger .router-link-active,
.menu-burger .router-link-exact-active,
.menu-burger router-link {
  color:#1C1B55; /* Couleur bleu profond pour les liens non visités */
}

/* Pour les liens visités sur mobile */
.menu-burger .router-link-active:visited,
.menu-burger .router-link-exact-active:visited,
.menu-burger router-link:visited {
  color: #FFD700; /* Couleur or pour les liens visités */
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

.links li{
  list-style: none; 
  padding: 10px;
  margin-right: 100px; 
  color: #F2F2F2;
  font-weight: 400;
  font-size: 700;
}
/*Effet de survol sur les liens */
.links li:hover {
  background-color: #FF6B6B; 
  color: #FFD700;
  cursor: pointer;  
  transform: scale(1.05); /*indique un élément cliquable */
  transition: transform 0.3s,background-color 0.3s; /* Anime les changements */
}
.logo{
  cursor: pointer;
  margin-left: 50px;

}
.logo:hover {
  opacity: 0.5;
}
/* Pour les liens non visités */
.router-link-active, .router-link-exact-active, router-link {
  color: #F2F2F2 ; /* Couleur blanche pour les liens non visités */
}

/* Pour les liens visités */
.router-link-active:visited, .router-link-exact-active:visited, router-link:visited {
  color:#FFD700 ; /* Couleur or pour les liens visités */
}
}

</style>
