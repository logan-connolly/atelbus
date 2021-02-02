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
  justify-content: space-around;
  margin-top: 4rem;
}
.service-nav-item {
  text-decoration: none;
  color: #13478e;
  font-size: 1.2rem;
  font-weight: 700;
}
.service-nav-item:hover {
  color: #071b36;
}
@media screen and (max-width: 768px) {
  .service-nav-items {
    justify-content: space-between;
  }
  .service-nav-item {
    font-size: 1.1rem;
  }
}
</style>
