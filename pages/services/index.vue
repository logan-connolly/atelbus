<template>
  <!-- component -->
  <!-- This is an example component -->
  <div>
    <section class="text-gray-900 bg-white">
      <div class="max-w-6xl mx-auto px-5 py-12 ">
        <div class="text-center mb-20">
          <h1
            class=" title-font mb-4 text-blue-700 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl"
          >
            Services
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            At ATEL, we service buses, recreational vehicles (RVs), motorhomes,
            cars & SUVs. Our 40,000 square foot facility is well-equipped to
            meet your mechanical, collision, glass, frame and A/C needs.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            class="p-10 md:w-1/2 md:mb-0 mb-6 flex flex-col flex-grow"
            v-for="service in services"
            :key="service.name"
          >
            <service-card :service="service"></service-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from "@/components/ServiceCard.vue";

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
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
