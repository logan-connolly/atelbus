<template>
  <page-layout :name="name" :desc="desc"> </page-layout>
</template>

<script>
import PageLayout from "@/components/PageLayout.vue";

export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      name: "Projects",
      desc: "Checkout some of the work that we have done for our customers.",
    };
  },
};
</script>
