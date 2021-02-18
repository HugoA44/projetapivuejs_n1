<template>
  <div>
    <div
      v-for="(comment, index) in commentsDatas.slice(0, 5)"
      :key="index"
      class="comment"
    > <!-- On sort un commentaire 5 fois du tableau des commentaires -->
      <h3>{{ comment.name }}</h3>
      <p class="email">{{ comment.email }}</p>
      <p class="body">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script>
import userService from "@/services/user.service.js";
export default {
  name: "Comments",
  data() {
    return {
      commentsDatas: [],
    };
  },
  props: {
    postId: {},
  },
  mounted() {
    userService
      .getCommentsByPostsId(this.postId)
      .then((response) => {
        console.log(response.data);
        this.commentsDatas = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
h3 {
  color: black;
  text-align: left;
  margin: 0;
}

.email {
  font-size: 12px;
  text-align: left;
  margin: 0;
  font-style: italic;
}

.comment {
  background-color: rgb(245, 245, 245);
  padding: 10px 15px;
  border-radius: 20px;
  margin-bottom: 15px;
}
</style>