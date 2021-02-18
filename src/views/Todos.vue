<template>
  <div>
    <h2>ToDo list de {{ userData.name }}</h2>
    <!-- Titre avec appel du nom de l'utilisateur -->
    <div class="cards">
      <!-- Div card -->
      <div
        v-for="(todo, index) in todoDatas"
        :key="index"
        class="card"
        v-bind:class="{ check: todo.completed }"
      >
        <!-- Div avec boucle for qui va chercher les élements du tableau todoDatas. Si l'élément est completé, la class check est créée -->
        <span v-if="todo.completed">Complété !</span>
        <!-- Si la tâche est complétée, complété est écrit  -->
        <span v-else>À faire !</span>
        <!-- Si la tâche n'est pas complétée, à faire est écrit -->
        <h2>{{ todo.title }}</h2>
        <!-- Titre du todo -->
      </div>
    </div>
  </div>
</template>

<script>
import userService from "@/services/user.service.js"; /* Importation du fichier js userService, fichier où les importations des api en axios se font */
export default {
  name: "Todos" /* Nom du fichier */,
  data() {
    /* Données utilisées */
    return {
      userId: this.$route.params.userId /* Récupération de l'id dans le lien */,
      todoDatas: [] /* Création du tableau des todo */,
      userData: [] /* Création du tableaux des utilisateurs */,
    };
  },
  mounted() {
    userService /* Importation de userService, fichier qui regroupe les importations axios des api */
      .getTodosByUserID(this.$route.params.userId) /* Appel de la fonction créé dans user.service.js, et selon l'id de l'user */
      .then((response) => {
        console.log(response.data);
        this.todoDatas = response.data; /* Ce qui sort de l'api va dans le tableau todoDatas */
      })
      .catch(function (error) {
        console.log(error);
      });
    userService
      .getUserById(this.$route.params.userId) /* Récupération de l'utilisateur qui correspond à l'id de la page */
      .then((response) => {
        console.log(response.data);
        this.userData = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(this.userData);
  },
};
</script>

<style scoped> /* CSS :-) */
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card {
  background-color: white;
  width: 100%;
  height: auto;
  padding: 15px 25px;
  border-radius: 20px;
  display: flex;
  margin-left: 15px;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-end;
}

span {
  display: inline-block;
  width: 25%;
  text-align: center;
}

.card h2 {
  display: inline-block;
  width: 75%;
  text-align: center;
}

.check {
  border: 2px;
  border-style: solid;
  border-color: rgb(16, 212, 16);
}
</style>
