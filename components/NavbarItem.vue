<template>
  <nuxt-link
    :to="item"
    class="mt-1 block ml-4 px-3 py-2 rounded-md text-lg font-medium text-blue-800 hover:text-white hover:bg-blue-700 focus:outline-none focus:text-white focus:bg-blue-700"
    >{{ capitalizeItem(item) }}</nuxt-link
  >
</template>

<script>
export default {
  props: ["item"],
  methods: {
    capitalizeItem(item) {
      return item[0].toUpperCase() + item.slice(1);
    }
  }
};
</script>
