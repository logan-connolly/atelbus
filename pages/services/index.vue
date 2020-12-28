<template>
  <page-layout name="Services">
    <template v-slot:header>
      We service buses, RVs, motorhomes, cars & SUVs. Our 40,000 square foot
      facility is well-equipped to meet your mechanical, collision, glass, frame
      and A/C needs.
    </template>
    <template v-slot:content>
      <div class="service-grid">
        <div
          class="service-grid-item"
          v-for="(service, index) in services"
          :key="index"
        >
          <service-card :service="service"></service-card>
        </div>
      </div>
    </template>
  </page-layout>
</template>

<script>
import ServiceCard from "@/components/services/ServiceCard.vue";

export default {
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        { name: "Body Work" },
        { name: "Mechanical Repairs" },
        { name: "Custom Paint" },
        { name: "RV Repair" }
      ]
    };
  }
};
</script>

<style>
.service-grid {
  display: grid;
  grid-gap: 2em;
}

.service-grid-item {
  border: 1px solid black;
}
</style>
