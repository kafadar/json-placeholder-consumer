<template>
  <div class="p-2">
    <Post :key="post.id" v-for="post in posts" :data="post" />
  </div>
</template>

<script>
import Post from "./Post";
export default {
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Post,
  },
};
</script>