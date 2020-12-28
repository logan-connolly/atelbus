<template>
  <div class="grid-page">
    <div class="nav">
      <nuxt-link to="/" class="nav-logo">ATEL</nuxt-link>
      <TheNavbar />
    </div>
    <div class="content">
      <Nuxt />
    </div>
    <div class="footer">
      <TheFooter />
    </div>
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
  grid-template-rows: 80px auto 40px;
  width: 100%;
  height: 100vh;
}

.nav {
  grid-column: 3 / -1;
  display: flex;
}

.nav-logo {
  margin: 0, auto;
  color: red;
  font-size: 2em;
  text-decoration: none;
}

.content {
  display: flex;
  margin-bottom: 2rem;
  grid-column: 3 / -3;
  grid-row: 2;
  justify-content: center;
}

.footer {
  grid-column: 1 / -1;
  grid-row: 3;
}
</style>
