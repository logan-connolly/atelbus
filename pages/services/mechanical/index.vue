<template>
  <page-layout name="Mechanical Repair">
    <template v-slot:header> </template>
    <template v-slot:content>
      <ServiceChips :items="items" />
      <ServiceNav :next="next" />
    </template>
  </page-layout>
</template>

<script>
import ServiceChips from "@/components/ServiceChips.vue";
import ServiceNav from "@/components/ServiceNav.vue";

export default {
  head: {
    title: "ATEL Bus & Truck | Services - Mechanical",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck mechanical services focus on repairs such as oil changes, electrical repairs, transmissions, engine failure, etc. for buses, trucks, RVs & motorhomes"
      }
    ]
  },
  components: {
    ServiceChips,
    ServiceNav
  },
  data() {
    return {
      items: [
        "A/C Service",
        "Preventitive Maitenance",
        "Diesel & Gasoline Induction",
        "Exhaust Gas Recirculation",
        "Transmission",
        "Power Steering"
      ],
      next: { name: "Paint Services", url: "/paint" }
    };
  }
};
</script>
