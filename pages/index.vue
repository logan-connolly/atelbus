<template>
  <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
    <div class="text-5xl font-semibold text-gray-900 leading-none">
      Keep your vehicles on the road
      <span class="text-blue-700">where they belong</span>
    </div>
    <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">
      Contact us to get a quote for your truck, bus or RV
    </div>
    <nuxt-link to="contact">
      <button
        class="mt-6 mr-2 px-8 py-4 rounded-md font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
      >
        Contact Us
      </button>
    </nuxt-link>
    <nuxt-link to="services">
      <button
        class="mt-6 px-8 py-4 rounded-md font-normal tracking-wide bg-gray-200 text-blue-700 outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out"
      >
        Our Services
      </button>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>
