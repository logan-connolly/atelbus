<template>
  <page-layout name="Mechanical Repair">
    <template v-slot:header>
      Our mechanical repair services meet all US DOT regulations.
    </template>
    <template v-slot:content>
      <ServiceChips :items="items" />
      <ServiceNav :prev="prev" :next="next" />
    </template>
  </page-layout>
</template>

<script>
import ServiceChips from "@/components/services/ServiceChips.vue";
import ServiceNav from "@/components/services/ServiceNav.vue";

export default {
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
      prev: { name: "Body Services", url: "/body" },
      next: { name: "Paint Services", url: "/paint" }
    };
  }
};
</script>
