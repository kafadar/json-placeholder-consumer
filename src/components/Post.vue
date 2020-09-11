<template>
  <article class="mb-2 p-4 rounded shadow-sm bg-white">
    <header class="text-md text-gray-600 font-semibold">{{ data.title }}</header>
    <p class="text-xl">{{ data.body }}</p>
    <p class="text-blue-500 text-right font-bold">- {{ user.username }}</p>
  </article>
</template>

<script>
import { mapGetters } from "vuex";

import { GET_USER } from "@/store/constants";

export default {
  props: {
    data: Object,
  },
  computed: {
    user: function () {
      return this.getUsername()(this.data.userId);
    },
  },
  methods: {
    ...mapGetters({
      getUsername: GET_USER,
    }),
  },
};
</script>