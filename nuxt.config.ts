// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-aos", "@nuxtjs/google-fonts"],
  colorMode: {
    preference: "light",
  },
  ui: {
    icons: ["material-symbols", "mdi"],
  },
  googleFonts: {
    families: {
      "Patua One": true,
      "Source Sans 3": true,
      "IBM Plex Mono": true,
      Poppins: true,
    },
  },
})
