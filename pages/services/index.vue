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
  head: {
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "ATEL Bus & Truck body, mechanical, paint and RV services for buses, trucks, RVs & motorhomes"
      }
    ]
  },
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          name: "Body Repair",
          img: "/services/body.jpg",
          link: "/services/body"
        },
        {
          name: "Mechanical Repair",
          img: "/services/mechanical.jpg",
          link: "/services/mechanical"
        },
        {
          name: "Custom Paint",
          img: "/services/paint.jpg",
          link: "/services/paint"
        },
        {
          name: "RV & Motorhome Repair",
          img: "/services/rv.jpg",
          link: "/services/rv"
        }
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
