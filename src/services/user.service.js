const axios = require("axios"); /* Vérication de la présense d'axios */

let userService = {
  getUsers() { /* Création de fonction à appeler, avec selon certains, les ID */
    return axios.get("https://jsonplaceholder.typicode.com/users");
  },
  getUserById(id) {
    return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  },
  getAlbums() {
    return axios.get("https://jsonplaceholder.typicode.com/albums");
  },
  getTodosByUserID(userId) {
    return axios.get(
      "https://jsonplaceholder.typicode.com/todos?userId=" + userId
    );
  },
  getPhotosByAlbumId(id) {
    return axios.get(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + id
    );
  },
  getPosts() {
    return axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
  },
  getCommentsByPostsId(postId) {
    return axios.get(
      "https://jsonplaceholder.typicode.com/comments?postId=" + postId
    );
  }
};

export default userService;
