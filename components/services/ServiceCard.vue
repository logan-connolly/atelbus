<template>
  <nuxt-link :to="service.link">
    <nuxt-image
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

<style></style>
