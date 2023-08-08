<template>
  <div class="justify-center w-full md:flex">
    <SideNav
      v-if="toggleOpen"
      :tabs="tabs"
      :currentRoute="currentRoute"
      @toggleOpen="toggleOpen = $event"
    />
    <div v-else class="p-8">
      <img @click="toggleOpen = true" src="/menu-open.png" class="h-7" />
    </div>
    <div class="w-full max-w-5xl max-h-screen px-12 overflow-y-auto pb-9">
      <slot />
    </div>
  </div>
</template>

<script>
import { useGtag } from "vue-gtag-next";

export default {
  setup() {
    const { event } = useGtag();
    return {
      event,
    };
  },
  data() {
    return {
      toggleOpen: true,
      tabs: [
        {
          title: "Index",
          path: "/",
        },
        {
          title: "Server Routes",
          path: "/server-routes",
        },

        {
          title: "Teleports",
          path: "/teleports",
        },
        {
          title: "Middleware",
          path: "/middleware",
        },
        {
          title: "Nuxt on the Edge",
          path: "/edge-functions",
        },
        {
          title: "Nuxt Loading Indicator",
          path: "/nuxt-loading-indicator",
        },
        {
          title: "Nuxt Link",
          path: "/nuxt-link-component",
        },
        {
          title: "Nuxt Content",
          path: "/nuxt-content",
        },
        {
          title: "Data Fetching",
          path: "/data-fetching",
        },
      ],
    };
  },
  computed: {
    currentRoute() {
      this.event("login", {
        event_category: "routing",
        event_label: this.$route.path,
      });
      return this.$route.path;
    },
    currentTab() {
      return this.tabs.find((tab) => {
        return tab.path === this.currentRoute;
      });
    },
  },
};
</script>
