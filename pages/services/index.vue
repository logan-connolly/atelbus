<template>
  <page-layout name="Services">
    <template v-slot:header>
      ATEL provides vehicle maintenance and repair services for buses, RVs,
      motorhomes, cars, and SUVs in Beltsville, MD. Our 40,000-square-foot
      facility offers comprehensive mechanical, collision, glass, frame, and A/C
      services that meet
      <a
        href="https://www.transportation.gov/regulations"
        target="_blank"
        rel="noopener"
        >DOT regulations</a
      >.
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
import ServiceCard from "@/components/ServiceCard.vue";

export default {
  head: {
    title: "ATEL Bus & Truck | Services",
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
          img: "/services/body.webp",
          link: "/services/body"
        },
        {
          name: "Mechanical Repair",
          img: "/services/mechanical.webp",
          link: "/services/mechanical"
        },
        {
          name: "Custom Paint",
          img: "/services/paint.webp",
          link: "/services/paint"
        },
        {
          name: "RV & Additional Services",
          img: "/services/rv.webp",
          link: "/services/rv"
        }
      ]
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
  color: #13478e;
}

a:hover {
  color: #071b36;
}

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
