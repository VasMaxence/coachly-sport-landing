<template>
  <div class="primary-button" @click="() => openCoachlyStore()">
    {{ $t("navigationGetCoachly") }}
  </div>
</template>

<script>
export default {
  methods: {
    openCoachlyStore() {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      let isApple = false;

      if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        isApple = true;
      } else if (/iPad/.test(userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) {
        isApple = true;
      } else if (/iPhone/.test(userAgent) || /iPod/.test(userAgent)) {
        isApple = true;
      }

      if (isApple) {
        window.open("https://apps.apple.com/fr/app/coachly-pro/id6473706079", "_blank");
      } else {
        window.open("https://play.google.com/store/apps/details?id=com.coachlysport.app.coach", "_blank");
      }
    },
  },
  name: "GetCoachlyButton",
};
</script>
