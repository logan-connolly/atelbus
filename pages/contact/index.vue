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
      name: "Contact Us",
      desc: "Get in touch with us by filling out the contact form.",
    };
  },
};
</script>
