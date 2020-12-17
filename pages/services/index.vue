<template>
  <page-layout :name="name" :desc="desc">
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div
        class="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col flex-grow"
        v-for="service in services"
        :key="service.name"
      >
        <service-card :service="service"></service-card>
      </div>
    </div>
  </page-layout>
</template>

<script>
import PageLayout from "@/components/PageLayout.vue";
import ServiceCard from "@/components/ServiceCard.vue";

export default {
  components: {
    PageLayout,
    ServiceCard,
  },
  data() {
    return {
      name: "Services",
      desc:
        "At ATEL, we service buses, recreational vehicles (RVs), motorhomes, cars & SUVs. Our 40,000 square foot facility is well-equipped to meet your mechanical, collision, glass, frame and A/C needs.",
      services: [
        { name: "Body Work", desc: "Hi I am body work" },
        { name: "Mechanical Repairs", desc: "Hi I am mechanical" },
        { name: "Custom Paint", desc: "Hi I am custom paint" },
        { name: "RV Repair", desc: "Hi I am RV repair" },
      ],
    };
  },
};
</script>
