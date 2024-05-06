<template>
  <footer class="coachly-footer">
    <div class="px-8 md:px-12 lg:px-16">
      <div class="divider"></div>
    </div>
    <div class="py-4"></div>
    <div class="flex item-start flex-col md:flex-row justify-between px-8 md:px-16 lg:px-24">
      <router-link to="/">
        <img src="~/static/logo.png" alt="Coachly main logo" class="secondary-logo" />
      </router-link>
      <div class="footer-column gap-0.5 flex flex-col">
        <div class="py-2"></div>
        <h3 class="footer-title">{{ $t("footerUtils") }}</h3>
        <NuxtLink v-for="link in footerUtils" :key="link.name" :to="link.to" class="footer-link">
          {{ $t(link.name) }}
        </NuxtLink>
      </div>
      <div class="footer-column gap-0.5 flex flex-col">
        <div class="py-2"></div>
        <h3 class="footer-title">{{ $t("footerHelpAndSocial") }}</h3>
        <NuxtLink v-for="link in footerHelpAndSocial" :key="link.name" :to="link.to" class="footer-link">
          {{ $t(link.name) }}
        </NuxtLink>
      </div>
      <div class="footer-column gap-0.5 flex flex-col">
        <div class="py-2"></div>
        <h3 class="footer-title">{{ $t("footerLegal") }}</h3>
        <NuxtLink v-for="link in footerLegal" :key="link.name" :to="link.to" class="footer-link">
          {{ $t(link.name) }}
        </NuxtLink>
      </div>
    </div>
    <!-- TODO footer -->
    <div class="py-8"></div>
    <div class="px-8 md:px-16 lg:px-24 flex flex-row items-end justify-center">
      <p class="text-sm">Coachly Group - 2024 - Tous droits réservés</p>
    </div>
    <div class="py-4"></div>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      socialLink: {
        facebook: "https://www.facebook.com/people/Coachlypro/61555770156985/",
        instagram: "https://www.instagram.com/coachlypro/",
      },
      footerUtils: [
        { name: "footerCoachly", to: "/" },
        { name: "footerCoachApp", to: "/coach-app" },
        { name: "footerClientApp", to: "/client-app" },
        { name: "footerPricing", to: "/pricing" },
        { name: "footerBlog", to: "/blog" },
      ],
      footerHelpAndSocial: [
        { name: "footerContact", to: "/contact" },
        { name: "footerTutorial", to: "/tutorial" },
      ],
      footerLegal: [
        { name: "footerLegalMention", to: "/legal/mentions" },
        { name: "footerCoachCgvu", to: "/legal/cgvu/coach" },
        { name: "footerClientCgvu", to: "/legal/cgvu/client" },
        { name: "footerCoachPolicy", to: "/legal/policy/coach" },
        { name: "footerClientPolicy", to: "/legal/policy/client" },
      ],
    };
  },
  name: "CoachlyFooter",
};
</script>
