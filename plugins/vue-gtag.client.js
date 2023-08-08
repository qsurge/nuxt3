import VueGtag, { trackRouter } from "vue-gtag-next";

console.log("nuxt cluenr");

export default defineNuxtPlugin((nuxtApp) => {
  console.log("nuxt", nuxtApp);

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-EZ3DBYCDJN",
      disabled: true
    },
  });
  trackRouter(useRouter());
});

