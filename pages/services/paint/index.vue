<template>
  <page-layout name="Custom Paint">
    <template v-slot:header> </template>
    <template v-slot:content>
      <ServiceChips :items="items" />
      <ServiceVideo :url="url" />
      <ServiceNav :next="next" />
    </template>
  </page-layout>
</template>

<script>
import ServiceChips from "@/components/ServiceChips.vue";
import ServiceNav from "@/components/ServiceNav.vue";
import ServiceVideo from "@/components/ServiceVideo.vue";

export default {
  head: {
    title: "ATEL Bus & Truck | Services - Paint",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck paint services consist of full paint jobs, touch-up repairs as well as custom paint jobs and vehicle wraps for buses, trucks, RVs & motorhomes"
      }
    ]
  },
  components: {
    ServiceChips,
    ServiceNav,
    ServiceVideo
  },
  data() {
    return {
      url: "https://www.youtube.com/embed/hBOC1UCI_g4",
      items: [
        "Graphic Design",
        "Vehicle Wraps",
        "45' & 65' Heated Paint Booths",
        "Refinishing",
        "Touch-ups",
        "Decal Removal"
      ],
      next: { name: "RV & Additional Services", url: "/rv" }
    };
  }
};
</script>
