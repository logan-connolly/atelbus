<template>
  <page-layout name="Custom Paint">
    <template v-slot:header>
      Our custom paint services meet all US DOT regulations.
    </template>
    <template v-slot:content>
      <ServiceChips :items="items" />
      <ServiceVideo :url="url" />
      <ServiceNav :prev="prev" :next="next" />
    </template>
  </page-layout>
</template>

<script>
import ServiceChips from "@/components/services/ServiceChips.vue";
import ServiceNav from "@/components/services/ServiceNav.vue";
import ServiceVideo from "@/components/services/ServiceVideo.vue";

export default {
  components: {
    ServiceChips,
    ServiceNav,
    ServiceVideo
  },
  data() {
    return {
      url: "https://www.youtube.com/embed/31PiyGpkIbc",
      items: [
        "Graphic Design",
        "Vehicle Wraps",
        "45' & 65' Heated Paint Booths"
      ],
      prev: { name: "Mechanical Services", url: "/mechanical" },
      next: { name: "RV & Additional Services", url: "/rv" }
    };
  }
};
</script>
