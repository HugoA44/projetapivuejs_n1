<template>
  <div>
    <AlbumCard /> <!-- Appel du component AlbumCard -->
  </div>
</template>

<script>
// @ is an alias to /src
import AlbumCard from "@/components/AlbumCard.vue"; /* Importation du composant AlbumCard */

export default {
  name: "Albums",
  components: {
    AlbumCard
  }
};
</script>
