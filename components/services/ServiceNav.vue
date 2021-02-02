<template>
  <div class="service-nav-items">
    <nuxt-link class="service-nav-item" :to="prevLink">
      {{ prevPage }}
    </nuxt-link>
    <nuxt-link class="service-nav-item" :to="nextLink">
      {{ nextPage }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["prev", "next"],
  data() {
    return {
      prevPage: "<< " + this.prev.name,
      prevLink: "/services" + this.prev.url,
      nextPage: this.next.name + " >>",
      nextLink: "/services" + this.next.url
    };
  }
};
</script>

<style>
.service-nav-items {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
.service-nav-item {
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
}
.service-nav-item:hover {
  color: #13478e;
}
</style>
