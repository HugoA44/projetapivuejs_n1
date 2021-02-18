<template>
  <div class="main">
    <div
      v-for="(post, index) in postsDatas.slice(0, 10)"
      :key="index"
      class="posts"
    >
      <!-- On sort 10 posts du tableau des posts -->
      <h2>{{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}</h2>
      <p>{{ post.body }}</p>
      <hr />

      <Comments :postId="post.id" />
      <!-- Appel du composant comments avec comme id l'id du post -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Comments from "@/components/Comments.vue";
import userService from "@/services/user.service.js";
export default {
  name: "Posts",
  components: {
    Comments,
  },
  data() {
    return {
      postsDatas: [],
    };
  },
  mounted() {
    userService
      .getPosts()
      .then((response) => {
        console.log(response.data);
        this.postsDatas = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.posts {
  background-color: white;
  width: 320px;
  height: auto;
  padding: 15px 25px;
  border-radius: 20px;
  margin: 0 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 42px 80px rgba(0, 0, 0, 0.03),
    0px 3.42222px 6.51852px rgba(0, 0, 0, 0.0117778);
  opacity: 0;
  animation: slidein 1s forwards 0.5s;
}
.posts:nth-child(1) {
  animation: slidein 1s forwards 0.3s;
}
.posts:nth-child(2) {
  animation: slidein 1s forwards 0.6s;
}
.posts:nth-child(3) {
  animation: slidein 1s forwards 0.9s;
}
h2 {
  width: 100%;
  background-color: rgb(252, 130, 130);
  padding: 3px;
  border-radius: 20px;
  color: white;
}
p {
  text-align: left;
}
.main {
  display: flex;
  flex-wrap: wrap;
}
hr {
  background-color: black;
  border: 2px;
}

@keyframes slidein {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 100%;
    transform: translateY(0px);
  }
}
</style>