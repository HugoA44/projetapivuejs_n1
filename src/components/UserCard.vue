<template>
  <div class="main">
    <SearchBar v-on:change="searchValue" />
    <!-- Appel de la SearchBar -->
    <div v-for="(user, index) in userDatasFiltered" :key="index" class="card">
      <!-- Boucle for qui va chercher chaque user dans le tableau userDatas -->
      <div class="headercard">
        <img class="image" src="http://placehold.it/32x32" />
        <div class="names">
          <h2>{{ user.name }}</h2>
          <!-- Synthaxe moustache, qui appel le nom de l'utilisateur sélectionné -->
          <span class="username">@{{ user.username }}</span>
        </div>
      </div>
      <div class="infos">
        <h3>Adresse :</h3>
        <span class="adress"
          >{{ user.address["suite"] }} {{ user.address["street"] }}
          {{ user.address["city"] }}</span
        >
      </div>
      <div class="contact">
        <h3>Contact :</h3>
        <span class="mail">{{ user.email }}</span
        ><br />
        <span class="tel">{{ user.phone }}</span>
      </div>
      <a v-bind:href="'/todos/' + user.id"
        ><span class="btn-grad">ToDo</span></a
      >
      <!-- Lien vers la page todos avec comme paramètre l'id de l'utilisateur -->
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"; /* Importation du component SearchBar */
import userService from "@/services/user.service.js"; /* Importation de user.service.js */
export default {
  name: "UserCard",
  components: {
    SearchBar,
  },
  data() {
    return {
      userDatas: [] /* Création du tableau qui accueillera les utilisateurs */,
      userDatasFiltered: [] /* Création du tableau qui accueillera les utilisateurs filtrés */,
    };
  },
  mounted() {
    userService
      .getUsers()
      .then((response) => {
        console.log(response.data);
        this.userDatas = response.data;
        this.userDatasFiltered = this.userDatas;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    searchValue(value) { /* Paramètres pour la recherche, qui cherche les éléments qui correspondent au nom */
      console.log(value);
      this.userDatasFiltered = this.userDatas.filter(
        (x) =>
          x.name.toLowerCase().includes(value.toLowerCase()) ||
          x.username.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: white;
  width: 320px;
  height: 275px;
  padding: 15px 25px;
  border-radius: 20px;
  display: inline-block;
  margin-left: 15px;
  margin-top: 15px;
}

.card .headercard {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card .headercard img {
  border-radius: 100%;
  margin-right: 8px;
}
.card .headercard h2 {
  margin: 0px;
}

.card .headercard .names {
  text-align: left;
}

.infos {
  text-align: left;
  margin-top: 20px;
}
h3 {
  margin: 0;
}

.contact {
  text-align: left;
  margin-top: 20px;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #24c6dc 0%,
    #514a9d 51%,
    #24c6dc 100%
  );
}
.btn-grad {
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 30px;
  display: block;
  width: 150px;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>