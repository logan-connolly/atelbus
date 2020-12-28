<template>
  <page-layout name="Reviews">
    <template v-slot:header>
      Here is what our customers are saying about ATEL.
    </template>
    <template v-slot:content>
      <div class="reviews">
        Insert Review Cards here
      </div>
    </template>
  </page-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.reviews {
  color: red;
}
</style>
