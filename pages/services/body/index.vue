<template>
  <page-layout name="Body Repair">
    <template v-slot:header> </template>
    <template v-slot:content>
      <ServiceChips :items="items" />
      <ServiceVideo :url="url" />
      <ServiceNav :next="next" />
    </template>
  </page-layout>
</template>

<script>
import ServiceChips from "@/components/services/ServiceChips.vue";
import ServiceNav from "@/components/services/ServiceNav.vue";
import ServiceVideo from "@/components/services/ServiceVideo.vue";

export default {
  head: {
    title: "ATEL Bus & Truck | Services - Body",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck body services focus on repairs of the frame, windshield, windows, roof, doors, fenders, bumpers, hood, trunk, etc. for buses, trucks, RVs & motorhomes"
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
      next: { name: "Mechanical Services", url: "/mechanical" }
    };
  }
};
</script>
