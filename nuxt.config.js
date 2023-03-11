export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: "en",
    },
    title: "ATEL Bus & Truck",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "ATEL Bus & Truck Company Website",
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    [
      "@nuxtjs/sitemap",
      {
        hostname: "https://atelbus.com",
        gzip: true,
      },
    ],
    [
      "@nuxtjs/google-analytics",
      {
        id: process.env.GA_TRACKING_ID || "UA-XXX-X",
      },
    ],
    [
      "@nuxtjs/fontawesome",
      {
        component: "fa",
        icons: {
          solid: [
            "faAngleDoubleRight",
            "faAngleDoubleLeft",
            "faEnvelopeSquare",
            "faPhoneSquareAlt",
          ],
          brands: ["faFacebookSquare", "faLinkedin", "faYelp"],
        },
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        download: true,
        display: "swap",
        families: {
          Cantarell: {
            wght: [400, 700],
          },
        },
      },
    ],
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxt/image"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
