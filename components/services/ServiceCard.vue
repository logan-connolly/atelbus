<template>
  <nuxt-link :to="service.link">
    <nuxt-image
      class="service-image"
      :lazy="false"
      sizes="200,340:350,700:300,1000:350,1200:400"
      :src="service.img"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style>
.service-image {
  border-radius: 5%;
  box-shadow: 5px 5px 5px #999;
}
</style>
