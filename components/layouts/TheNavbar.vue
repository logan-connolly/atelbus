<template>
  <div class="nav">
    <nuxt-link to="/">
      <img
        src="/logo.svg"
        alt="ATEL Bus & Truck Logo"
        width="100"
        height="80"
      />
    </nuxt-link>
    <TheSidebarToggle @toggle="$emit('sidebarToggle')" />
    <div class="nav-items">
      <nuxt-link to="/services" class="nav-item">Services</nuxt-link>
      <nuxt-link to="/about" class="nav-item">About</nuxt-link>
      <nuxt-link to="/contact" class="nav-item">Contact</nuxt-link>
    </div>
  </div>
</template>

<script>
import TheSidebarToggle from "@/components/layouts/TheSidebarToggle.vue";

export default {
  components: {
    TheSidebarToggle
  }
};
</script>

<style>
.nav {
  grid-column: 3 / -3;
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
  font-size: 1.2rem;
}

.nav-item:hover {
  color: #13478e;
}

@media screen and (max-width: 768px) {
  .nav {
    grid-column: 2 / -1;
  }
  .nav-logo {
    margin-top: 1rem;
    width: 80px;
    height: 60px;
  }
  .nav-items {
    display: none;
  }
}
</style>
