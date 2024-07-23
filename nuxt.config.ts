export default {
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@vueuse/nuxt"],
  build: {
    transpile: ["@headlessui/vue"],
  },
  colorMode: {
    classSuffix: "",
  },
  plugins: ["~/plugins/toast.js"],
};
