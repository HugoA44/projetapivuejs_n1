<template>
  <!-- Template appelé dans le App.vue -->
  <div class="users">
    <UserCard />
    <!-- Appel du composant UserCard -->
  </div>
</template>

<script>
// @ is an alias to /src
import UserCard from "@/components/UserCard.vue"; /* Importation du component UserCard */

export default {
  name: "Users" /* Nom du fichier */,
  components: {
    /* Importation du component */ UserCard,
  },
};
</script>
