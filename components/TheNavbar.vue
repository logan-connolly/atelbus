<template>
  <div class="nav-items">
    <nuxt-link to="services" class="nav-item">Services</nuxt-link>
    <nuxt-link to="projects" class="nav-item">Projects</nuxt-link>
    <nuxt-link to="reviews" class="nav-item">Reviews</nuxt-link>
    <nuxt-link to="contact" class="nav-item">Contact</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-items {
  display: flex;
  margin-left: auto;
}

.nav-item {
  margin: 1em 1em;
  text-decoration: none;
  color: #014f86;
}

.nav-item:hover {
  color: #2a6f97;
}
</style>
