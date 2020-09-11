<template>
  <div class="flex justify-between py-4">
    <Button :disabled="!gotPrev" @click.native="emitPrev">PREV</Button>
    <Button
      :key="index"
      v-for="index in pages"
      @click.native="emitPage(index)"
      :active="(currentPage == index)"
    >{{ index }}</Button>
    <Button :disabled="!gotNext" @click.native="emitNext">NEXT</Button>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  components: {
    Button,
  },
  props: {
    totalPages: Number,
    currentPage: Number,
    gotNext: Boolean,
    gotPrev: Boolean,
  },
  computed: {
    pages: function () {
      return Array.from(new Array(this.totalPages), (_, i) => ++i);
    },
  },
  methods: {
    emitPage: function (num) {
      this.$emit("page", num);
    },
    emitNext: function () {
      if (this.gotNext) this.$emit("next");
    },
    emitPrev: function () {
      if (this.gotPrev) this.$emit("prev");
    },
  },
};
</script>