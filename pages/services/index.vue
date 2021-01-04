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
        { name: "Body Work", img: "/services/body.jpg" },
        { name: "Mechanical Repairs", img: "/services/mechanical.jpg" },
        { name: "Custom Paint", img: "/services/paint.jpg" },
        { name: "RV Repair", img: "/services/rv.jpg" }
      ]
    };
  }
};
</script>

<style>
.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}

@media screen and (max-width: 750px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
