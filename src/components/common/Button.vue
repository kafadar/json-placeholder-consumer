<template>
  <button
    class="inline-block bg-white hover:bg-gray-200 px-4 py-2 rounded shadow-xs cursor-pointer"
    :class="{
      'bg-gray-500 text-white': active,
      'opacity-25 cursor-not-allowed' : disabled
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    active: Boolean,
    disabled: Boolean,
  },
};
</script>