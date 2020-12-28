<template>
  <div class="service-card">
    <div class="service-name">{{ service.name }}</div>
  </div>
</template>

<script>
export default {
  props: ["service"]
};
</script>

<style>
.service-name {
  padding: 2rem;
}
</style>
