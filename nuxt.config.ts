export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],

  build: {
    transpile: ["@headlessui/vue", "vue-toastification"],
  },

  plugins: ["~/plugins/toast.client.ts"],
  css: ["vue-toastification/dist/index.css"],
  compatibilityDate: "2024-07-23",
});
