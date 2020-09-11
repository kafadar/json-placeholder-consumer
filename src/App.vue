<template>
  <div>
    <header class="bg-gray-600 sticky top-0 py-2">
      <div class="container mx-auto flex justify-between">
        <div class="flex items-center">
          <span class="font-semibold text-gray-400">TOTAL POSTS:</span>
          <span class="font-bold text-white px-2 text-xl">{{ postCount }}</span>
        </div>
        <div>
          <Button
            @click.native="setItemsPerPage(10)"
            :active="(itemsPerPage == 10)"
            :disabled="(itemsPerPage == 10)"
            class="ml-2"
          >10</Button>
          <Button
            @click.native="setItemsPerPage(25)"
            :active="(itemsPerPage == 25)"
            :disabled="(itemsPerPage == 25)"
            class="ml-2"
          >25</Button>
          <Button
            @click.native="setItemsPerPage(50)"
            :active="(itemsPerPage == 50)"
            :disabled="(itemsPerPage == 50)"
            class="ml-2"
          >50</Button>
        </div>
      </div>
    </header>
    <div class="container mx-auto">
      <Pagination
        @page="setPage"
        @prev="prevPage"
        @next="nextPage"
        :total-pages="totalPages"
        :current-page="currentPage"
        :got-next="gotNext"
        :got-prev="gotPrevious"
      />
      <PostList :posts="posts" />
      <Pagination
        @page="setPage"
        @prev="prevPage"
        @next="nextPage"
        :total-pages="totalPages"
        :current-page="currentPage"
        :got-next="gotNext"
        :got-prev="gotPrevious"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import {
  LOAD_DATA,
  GET_POSTS,
  PAGE_COUNT,
  POST_COUNT,
  CURRENT_PAGE,
  GOT_NEXT_PAGE,
  GOT_PREV_PAGE,
  ITEMS_PER_PAGE,
  SET_ITEMS_PER_PAGE,
  SET_PAGE,
  NEXT_PAGE,
  PREV_PAGE,
} from "@/store/constants";

import Button from "@/components/common/Button";
import PostList from "@/components/PostList";
import Pagination from "@/components/common/Pagination";

export default {
  components: {
    Button,
    PostList,
    Pagination,
  },
  computed: {
    ...mapGetters({
      posts: GET_POSTS,
      postCount: POST_COUNT,
      itemsPerPage: ITEMS_PER_PAGE,
      totalPages: PAGE_COUNT,
      gotNext: GOT_NEXT_PAGE,
      gotPrevious: GOT_PREV_PAGE,
      currentPage: CURRENT_PAGE,
    }),
  },
  methods: {
    setPage(num) {
      this.$store.commit(SET_PAGE, num);
    },
    prevPage() {
      this.$store.commit(PREV_PAGE);
    },
    nextPage() {
      this.$store.commit(NEXT_PAGE);
    },
    setItemsPerPage(count) {
      this.$store.commit(SET_ITEMS_PER_PAGE, count);
    },
  },
  mounted() {
    this.$store.dispatch(LOAD_DATA).then(() => {});
  },
};
</script>
