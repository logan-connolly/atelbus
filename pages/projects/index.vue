<template>
  <page-layout name="Projects">
    <template v-slot:header>
      Below, you can find some of the work that we have done for our customers.
    </template>
    <template v-slot:content>
      <div class="projects">
        Insert Projects here
      </div>
    </template>
  </page-layout>
</template>

<script>
export default {
  head: {
    title: "ATEL | Projects",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck projects showcasing a variety of repairs for buses, trucks and RVs"
      }
    ]
  }
};
</script>

<style scoped>
.projects {
  color: red;
}
</style>
