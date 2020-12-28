<template>
  <div class="grid-page">
    <TheNavbar />
    <div class="content">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  components: {
    TheNavbar,
    TheFooter
  }
};
</script>

<style>
.grid-page {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40px auto 40px;
  width: 100%;
  height: 100vh;
}

.content {
  display: flex;
  grid-column: 3 / -3;
  grid-row: 2;
}
</style>
