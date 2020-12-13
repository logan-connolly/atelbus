<template>
  <div>
    <TheNavbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  components: {
    TheNavbar
  }
};
</script>
