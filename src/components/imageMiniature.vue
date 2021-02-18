<template>
  <div class="images">
    <div v-for="(photo, index) in photosDatas" :key="index" >
      <img :src="photo.thumbnailUrl" />
    </div>
  </div>
</template>

<script>
import userService from "@/services/user.service.js";
export default {
  name: "imageMiniature",
  data() {
    return {
      photosDatas: [],
    };
  },
  props: {
    id: {}, /* Propriété id qui récupère l'id de l'élément du component parent */
  },
  mounted() {
    userService
      .getPhotosByAlbumId(this.id) /* Récupération des photos selon les id d'album */
      .then((response) => {
        console.log(response.data);
        this.photosDatas = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
img {
    width: 20px;
    height: 20px;
}
.images {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>