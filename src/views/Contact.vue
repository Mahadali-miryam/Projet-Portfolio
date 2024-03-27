<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

/*références pour les données du formulaire*/
const firstName = ref('');
const lastName = ref('');
const subject = ref('');
const message = ref('');

/*identifiants EmailJS*/
const SERVICE_ID = 'service_72sumdl';
const TEMPLATE_ID = 'template_dx8yxvh';
const USER_ID = 'DBqIFJc9dpmFMgkQB'; 

/*Fonction pour envoyer le formulaire de contact*/
const sendContactForm = async (formEvent) => {
  formEvent.preventDefault();

  try {
    /*Envoie le formulaire avec EmailJS*/
    const result = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEvent.target, USER_ID);

    /*Affiche une notification de succès à l'utilisateur*/
    alert('Message envoyé avec succès !');
  } catch (error) {

    /*Affiche une notification d'erreur à l'utilisateur*/
    alert('Erreur lors de l\'envoi du message.');
  }
};
</script>

<template>
<main>
  <div class="contact-form">
    <h1>Contactez-moi</h1> 
    <p>Vous avez un projet en tête ? Discutons-en ensemble !</p> 
    <form @submit.prevent="sendContactForm">
      <div>
        <label for="lastName">Nom:</label>
        <input type="text" id="lastName" name="lastName" v-model="lastName" required />
      </div>

      <div>
        <label for="firstName">Prénom:</label>
        <input type="text" id="firstName" name="firstName"  v-model="firstName" required />
      </div>
      
      <div>
        <label for="subject">Objet:</label>
        <input type="text" id="subject" name="subject" v-model="subject" required />
      </div>
      
      <div>
        <label for="message">Message:</label>
        <textarea id="message" name="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  </div>
  </main>
</template>



<style scoped>
.contact-form {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #F2F2F2; 
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}
.contact-form h1 {
  text-align: center;
  color: #333; 
  margin-bottom: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2rem;
}

.contact-form p {
  text-align: center;
  color: #333; 
  margin-bottom: 2rem;
}
form div {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #1C1B55;
   
}

input[type="text"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #1C1B55; 
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="email"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #1C1B55; 
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  height: 120px;
  resize: vertical;
}

button {
  padding: 0.5rem 1rem;
  background-color: #FFD700; 
  color: #1C1B55; 
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
}
.contact-form button {
    display: block; 
    margin-left: auto; 
    margin-right: auto;
    width: auto; 
  }
button:hover {
  background-color:#87CEEB; 
   
}
@media (max-width: 768px) {
  .contact-form {
    padding-bottom: 20%; 
    padding-top: 10%;
    
  }
  .contact-form button {
    display: block; 
    margin-left: auto; 
    margin-right: auto;
    width: auto; 
  }
  input[type="text"],
  input[type="email"],
  textarea {
    padding: 0.25rem;  
  }

 
}
</style>