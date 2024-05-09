export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "coachly-sport-landing",
    htmlAttrs: {
      lang: "en",
    },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }, { name: "format-detection", content: "telephone=no" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/static/sass/_variables.scss", "~/static/sass/_fonts.scss", "~/static/sass/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/toast.js", mode: "client" },
    { src: "~/plugins/aos.js", ssr: false, mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/axios"],

  image: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.js" },
      { code: "fr", iso: "fr-FR", file: "fr-FR.js" },
    ],
    defaultLocale: "fr",
    langDir: "lang/",
    strategy: "prefix_except_default",
    vueI18n: {
      fallbackLocale: "fr",
      messages: {
        en: {},
        fr: {},
      },
    },
  },

  axios: {},
};
