<template>
  <nav class="sticky top-0 z-50 navbar md:py-4 py-2 lg:px-20 md:px-14 px-7 gap-5 relative">
    <div class="flex-1 flex justify-start">
      <CoachlyFullLogo />
    </div>
    <div class="flex-2 justify-center hidden lg:flex lg:gap-12 md:gap-5">
      <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :class="{ 'nav-active': isActive(link.to) }" class="p-0">
        {{ $t(link.name) }}
      </NuxtLink>
    </div>
    <div class="flex-1 justify-end hidden lg:flex items-center gap-8">
      <a href="https://coachly-sport.app/" target="_blank" class="permanent-dark-blue">
        {{ $t("navigationLogin") }}
      </a>
      <GetCoachlyButton />
    </div>
    <div class="flex-1 flex block md:hidden justify-end">
      <NavMenuOpen />
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "navigationHome", to: "/" },
        { name: "navigationCoachApp", to: "/coach-app" },
        { name: "navigationClientApp", to: "/client-app" },
        { name: "navigationBlog", to: "/blog" },
        { name: "navigationPricing", to: "/pricing" },
        { name: "navigationContact", to: "/contact" },
      ],
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
