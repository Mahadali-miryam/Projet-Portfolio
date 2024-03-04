<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const message = ref('');

const sendContactForm = async () => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value
  };
  
try {
  /*Envoi de la requête POST avec les données du formulaire au serveur*/
  const response = await fetch('http://localhost:5173/home', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(formData)
  });
    /* Gestion de la réponse du serveur*/
  if (response.ok) {
    alert('Message envoyé avec succès !');
  } else {
    alert('Erreur lors de l\'envoi du message.');
  }
  } catch (error) {
    alert('Erreur de réseau.');
  }
};
</script>

<template>
 <Header/>
<main>
  <div class="contact-form">
    <h2>Contactez-moi</h2> 
    <p>Vous avez un projet en tête ? Discutons-en ensemble !</p> 
    <form @submit.prevent="sendContactForm">
      <div>
        <label for="firstName">Prénom:</label>
        <input type="text" id="firstName" v-model="firstName" required />
      </div>
      <div>
        <label for="lastName">Nom:</label>
        <input type="text" id="lastName" v-model="lastName" required />
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="email" required/>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
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
.contact-form h2 {
  text-align: center;
  color: #1C1B55; 
  margin-bottom: 1rem;
 
}

.contact-form p {
  text-align: center;
  color: #666666; 
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

button:hover {
  background-color: #FF6B6B; 
  color: #FFD700; 
}
@media (max-width: 768px) {
  .contact-form {
    margin: 1rem; 
    padding: 1rem; 
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