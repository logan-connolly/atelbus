<template>
  <div class="grid-page">
    <the-navbar></the-navbar>
    <div class="content">
      <nuxt></nuxt>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";

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
  grid-template-rows: 80px auto 60px;
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

.content {
  display: flex;
  margin-bottom: 4rem;
  grid-column: 3 / -3;
  grid-row: 2;
  justify-content: center;
}

@media screen and (min-width: 1000px) {
  .content {
    grid-column: 4/ -4;
  }
}
</style>
