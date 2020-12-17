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
      name: "Reviews",
      desc: "Here is what are customers are saying about ATEL.",
    };
  },
};
</script>
