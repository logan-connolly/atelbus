<template>
  <page-layout name="RV & Additional Services">
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
      url: "https://youtube.com/embed/Lz8min0XaZw",
      items: [
        "RV Body, Mechanical and Paint",
        "Wheelchair Lift Service",
        "Safety Inspections (A, B, C)",
        "Aluminum Wheel Polishing"
      ],
      prev: { name: "Paint Services", url: "/paint" },
      next: { name: "Body Services", url: "/body" }
    };
  }
};
</script>
