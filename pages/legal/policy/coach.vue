<template>
  <div class="static">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-6"></div>

    <!-- Legal mentions list -->
    <div class="lg:px-24 md:px-20 px-8">
      <div class="flex justify-center">
        <h1 class="text-4xl font-semibold">{{ $t("privacyPolicyCoachTitle") }}</h1>
      </div>
      <div class="py-4"></div>

      <!-- Section 1 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection1Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection1Body1") }}</p>
      <div class="py-3"></div>

      <!-- Section 2 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection2Title") }}</h3>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection2Subsection1Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection2Subsection1Body1") }}</p>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection2Subsection2Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection2Subsection2Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection2Subsection2Body2") }}</p>
      <div class="py-3"></div>

      <!-- Section 3 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection3Title") }}</h3>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection3Subsection1Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection3Subsection1Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection3Subsection1Body2") }}</p>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection3Subsection2Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection3Subsection2Body1") }}</p>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection3Subsection3Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection3Subsection3Body1") }}</p>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection3Subsection4Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection3Subsection4Body1") }}</p>
      <ul>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection3Subsection4List1Item1") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection3Subsection4List1Item2") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection3Subsection4List1Item3") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection3Subsection4List1Item4") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection3Subsection4List1Item5") }}</li>
      </ul>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection3Subsection5Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection3Subsection5Body1") }}</p>
      <div class="py-3"></div>

      <!-- Section 4 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection4Title") }}</h3>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection4Subsection1Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection4Subsection1Body1") }}</p>
      <ul>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item1") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item2") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item3") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item4") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item5") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item6") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item7") }}</li>
        <li class="text-base font-normal">- {{ $t("privacyPolicyCoachSection4Subsection1List1Item8") }}</li>
      </ul>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection4Subsection2Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection4Subsection2Body1") }}</p>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("privacyPolicyCoachSection4Subsection3Title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection4Subsection3Body1") }}</p>
      <div class="py-3"></div>

      <!-- Section 5 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection5Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection5Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection5Body2") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection5Body3") }}</p>
      <div class="py-3"></div>

      <!-- Section 6 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection6Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection6Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection6Body2") }}</p>
      <div class="py-3"></div>
      
      <!-- Section 7 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection7Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection7Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection7Body2") }}</p>
      <div class="py-3"></div>

      <!-- Section 8 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection8Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection8Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection8Body2") }}</p>
      <div class="py-3"></div>
      
      <!-- Section 9 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection9Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection9Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection9Body2") }}</p>
      <div class="py-3"></div>
      
      <!-- Section 10 -->
      <h3 class="text-lg font-semibold">{{ $t("privacyPolicyCoachSection10Title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection10Body1") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection10Body2") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection10Body3") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection10Body4") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection10Body5") }}</p>
      <p class="text-base font-normal">{{ $t("privacyPolicyCoachSection10Body6") }}</p>
      <div class="py-3"></div>

    </div>

    <!-- FOOTER Widget -->
    <div class="py-8"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../../../components/NavBar.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";

import translationFR from "../../../lang/fr-FR";
import translationLegalFR from "../../../lang/legal/fr-FR";
import translationEN from "../../../lang/en-US";
import translationLegalEN from "../../../lang/legal/en-US";

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
