<template>
  <div class="static">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-8"></div>

    <!-- All the tutorial... -->
    <div class="lg:px-24 md:px-20 px-8">
      <div class="container color-lowOrange rounded-2xl px-12 py-5">
        <h1 class="coachly-title line-under-start-orange">
          {{ $t("tutorialTitle.1") }}
          <span class="text-mainOrange">{{ $t("tutorialTitle.2") }}</span>
          {{ $t("tutorialTitle.3") }}
        </h1>
      </div>

      <div class="py-2"></div>

      <TutorialItemList />
    </div>

    <!-- Footer -->
    <div class="py-8"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import TutorialItemList from "../components/tutorial/TutorialItemList.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";

import translationFR from "../lang/fr-FR";
import translationEN from "../lang/en-US";

Vue.use(VueI18n);

const messages = {
  fr: translationFR,
  en: translationEN,
};

const i18n = new VueI18n({
  locale: "fr",
  messages,
});

export default Vue.extend({
  name: "IndexPage",
  components: {
    NavBar,
    Footer,
    TutorialItemList,
  },
  i18n,
});
</script>
