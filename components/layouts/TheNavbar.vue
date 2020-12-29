<template>
  <div class="nav">
    <nuxt-link to="/">
      <nuxt-image :lazy="false" src="/logo.png" />
    </nuxt-link>
    <div class="nav-items">
      <nuxt-link to="services" class="nav-item">Services</nuxt-link>
      <nuxt-link to="projects" class="nav-item">Projects</nuxt-link>
      <nuxt-link to="about" class="nav-item">About</nuxt-link>
      <nuxt-link to="contact" class="nav-item">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.nav {
  grid-column: 3 / -2;
  display: flex;
}

.nav-items {
  display: flex;
  margin-left: auto;
  align-items: center;
}

.nav-item {
  margin: 1em 1em;
  text-decoration: none;
  color: #000;
}

.nav-item:hover {
  color: #13478e;
}
</style>
