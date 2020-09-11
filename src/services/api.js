const api = {
  getUsers: function() {
    return fetch("https://jsonplaceholder.typicode.com/users");
  },
  getPosts: function() {
    return fetch("https://jsonplaceholder.typicode.com/posts");
  },
};

export default api;
