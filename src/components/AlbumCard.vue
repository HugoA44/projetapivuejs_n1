<template>
  <div>
    <div
      v-for="(album, index) in albumDatas.slice(start, end)"
      :key="index"
      class="card"
    >
      <h2>{{ album.title }}</h2>
      <imageMiniature :id="album.id"/> <!-- Appel du component imageMiniature avec comme id l'id de lalbum -->
    </div>
  </div>
</template>

<script>
import userService from "@/services/user.service.js";
import imageMiniature from "@/components/imageMiniature.vue";
export default {
  name: "AlbumCard",
  components: {
    imageMiniature
  },
  data() {
    return {
      albumDatas: [],
    };
  },
  mounted() {
    userService
      .getAlbums()
      .then((response) => {
        console.log(response.data);
        this.albumDatas = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: white;
  width: 320px;
  height: auto;
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