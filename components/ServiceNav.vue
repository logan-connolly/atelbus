<template>
  <div class="service-nav-items">
    <nuxt-link class="service-nav-item" to="/services">
      <span>
        <fa :icon="['fas', 'angle-double-left']" />
      </span>
      All Services
    </nuxt-link>
    <nuxt-link class="service-nav-item" :to="nextLink">
      {{ nextPage }}
      <span>
        <fa :icon="['fas', 'angle-double-right']" />
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["next"],
  data() {
    return {
      nextPage: this.next.name,
      nextLink: "/services" + this.next.url,
    };
  },
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
