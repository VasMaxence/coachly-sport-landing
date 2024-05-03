<template>
  <nav class="navbar">
    <div class="nav-item">
      <CoachlyFullLogo />
    </div>
    <div class="nav-item">
      <NuxtLink v-for="link in links" :key="link.name" :to="link.to" :class="{ 'nav-active': isActive(link.to) }" class="p-2">
        {{ $t(link.name) }}
      </NuxtLink>
    </div>
    <div class="nav-item align-end">
      <!-- Download and login button -->
      <a href="https://coachly-sport.app/" target="_blank" class="permanent-dark-blue">
        {{ $t("navigationLogin") }}
      </a>
      <GetCoachlyButton />
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
        // Ajoute d'autres liens ici selon tes besoins
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
