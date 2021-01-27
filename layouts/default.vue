<template>
  <div class="grid-page">
    <TheNavbar @sidebarToggle="displaySidebar = !displaySidebar" />
    <TheSidebar :show="displaySidebar" @close="displaySidebar = false" />
    <div class="content">
      <Nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "@/components/layouts/TheFooter.vue";
import TheNavbar from "@/components/layouts/TheNavbar.vue";
import TheSidebar from "@/components/layouts/TheSidebar.vue";

export default {
  components: {
    TheFooter,
    TheNavbar,
    TheSidebar
  },
  data() {
    return {
      displaySidebar: false
    };
  }
};
</script>

<style>
.grid-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  height: -webkit-fill-available;
}

.content {
  display: flex;
  margin-bottom: 4rem;
  grid-column: 3 / -3;
  grid-row: 2;
  justify-content: center;
  font-size: 1.3rem;
}

@media screen and (max-width: 768px) {
  .content {
    grid-column: 2 / -2;
  }
}
@media screen and (min-width: 1000px) {
  .content {
    grid-column: 3 / -3;
  }
}
</style>
