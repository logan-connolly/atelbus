<template>
  <div class="service-card">
    <nuxt-image
      :lazy="false"
      sizes="200,340:350,750:300,1000:350,1200:400"
      src="/services/rv.jpg"
    />
  </div>
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style>
.service-card {
}

.service-name {
}
</style>
