<template>
  <page-layout name="Projects">
    <template v-slot:header>
      Checkout some of the work that we have done for our customers.
    </template>
    <template v-slot:content>
      <div class="projects">
        Insert Projects here
      </div>
    </template>
  </page-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.projects {
  color: red;
}
</style>
