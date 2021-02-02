<template>
  <page-layout name="Body Repair">
    <template v-slot:header>
      Our body repair services meet all US DOT regulations.
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
      url: "https://www.youtube.com/embed/R0-HClelP3k",
      items: [
        "Total Frame Repair",
        "Frame Straightening",
        "Rust Removal & Restoration",
        "Vehicle Refurbishing",
        "Glass Replacement Services",
        "Window Tinting",
        "Soda Blasting"
      ],
      prev: { name: "RV & Additional Services", url: "/rv" },
      next: { name: "Mechanical Services", url: "/mechanical" }
    };
  }
};
</script>
