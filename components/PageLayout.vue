<template>
  <div>
    <section class="text-gray-900 bg-white">
      <div class="max-w-6xl mx-auto px-5 py-12 ">
        <div class="text-center mb-20">
          <h1
            class="title-font mb-4 text-blue-700 text-4xl font-extrabold leading-10 tracking-tight sm:text-4xl sm:leading-none md:text-5xl"
          >
            {{ name }}
          </h1>
          <p class="text-base leading-relaxed flex-shrink-0 w-4/5 mx-auto">
            {{ desc }}
          </p>
          <div class="flex mt-6 mb-12 justify-center">
            <div class="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
          </div>
          <slot></slot>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["name", "desc"],
};
</script>
