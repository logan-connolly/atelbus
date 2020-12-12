<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <nuxt-link to="/">
              <img
                class="h-8 w-8"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Bus-logo.svg"
                alt="ATEL Bus & Truck"
              />
            </nuxt-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex">
              <ul v-for="item in items" :key="item">
                <NavbarItem :item="item" />
              </ul>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu button -->
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3">
        <ul v-for="item in items" :key="item">
          <NavbarItem :item="item" />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarItem from "@/components/NavbarItem.vue";

export default {
  data() {
    return {
      items: ["services", "projects", "reviews", "contact"],
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
