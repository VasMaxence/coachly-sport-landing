<template>
  <div class="static">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-6"></div>

    <!-- Legal mentions list -->
    <div class="lg:px-24 md:px-20 px-8">
      <div class="flex justify-center">
        <h1 class="text-4xl font-semibold">{{ $t("legalMentionTitle") }}</h1>
      </div>
      <div class="py-4"></div>
      <h3 class="text-lg font-semibold">{{ $t("legalMentionSectionTitle1") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("legalMentionSection1Body1") }}</p>
      <p class="text-base font-normal">{{ $t("legalMentionSection1Body2") }}</p>
      <p class="text-base font-normal">{{ $t("legalMentionSection1Body3") }}</p>
      <p class="text-base font-normal">{{ $t("legalMentionSection1Body4") }}</p>
      <div class="py-3"></div>
      <h3 class="text-lg font-semibold">{{ $t("legalMentionSectionTitle2") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("legalMentionSection2Body1") }}</p>
    </div>

    <!-- FOOTER Widget -->
    <div class="py-8"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";

import translationFR from "../../lang/fr-FR";
import translationLegalFR from "../../lang/legal/fr-FR";
import translationEN from "../../lang/en-US";
import translationLegalEN from "../../lang/legal/en-US";

Vue.use(VueI18n);

const messages = {
  fr: {
    ...translationFR,
    ...translationLegalFR,
  },
  en: {
    ...translationEN,
    ...translationLegalEN,
  },
};

const i18n = new VueI18n({
  locale: "fr", // set locale
  messages, // set locale messages
});

export default Vue.extend({
  name: "LegalMentionsPage",
  components: {
    NavBar,
  },
  i18n,
});
</script>
