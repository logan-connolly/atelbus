<template>
  <page-layout name="RV & Additional Services">
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
    title: "ATEL | Services - RV & Additional",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck RV and additional services consists of special type of repairs that the average repair shops do not provide for buses, trucks, RVs & motorhomes"
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
      url: "https://youtube.com/embed/Lz8min0XaZw",
      items: [
        "Custom Parts",
        "Wheelchair Lift Service",
        "Safety Inspections (A, B, C)",
        "Aluminum Wheel Polishing",
        "Waste & Water System",
        "Slide-Out Rooms"
      ],
      next: { name: "Body Services", url: "/body" }
    };
  }
};
</script>
