<template>
  <div class="static">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-6"></div>

    <!-- Legal mentions list -->
    <div class="lg:px-24 md:px-20 px-8">
      <div class="flex justify-center">
        <h1 class="text-4xl font-semibold">{{ $t("cgvuClientTitle") }}</h1>
      </div>
      <div class="py-6"></div>

      <!-- Préambule -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.start") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.start-body.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.start-body.2") }}</p>
      <div class="py-0.5"></div>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.4") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.5") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.6") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.start-body.2-items.7") }}</li>
      </ul>
      <div class="py-3"></div>

      <!-- Article 1 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-1.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-1.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-1.2") }}</p>
      <div class="py-3"></div>

      <!-- Article 2 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-2.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-2.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-2.2") }}</p>
      <div class="py-3"></div>

      <!-- Article 3 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-3.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-3.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 4 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-4.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-4.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-4.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-4.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-4.1-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-4.1-items.4") }}</li>
      </ul>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-4.2") }}</p>
      <div class="py-3"></div>

      <!-- Article 5 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-5.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-5.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-5.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-5.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-5.1-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-5.1-items.4") }}</li>
      </ul>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-5.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-5.3") }}</p>
      <div class="py-3"></div>

      <!-- Article 6 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-6.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-6.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-6.2") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-6.2-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-6.2-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-6.2-items.3") }}</li>
      </ul>
      <div class="py-3"></div>

      <!-- Article 7 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-7.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-7.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-7.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-7.3") }}</p>
      <div class="py-3"></div>

      <!-- Article 8 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-8.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-8.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 9 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-9.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-9.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 10 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-10.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-10.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.4") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.5") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.6") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.7") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.8") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.9") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-10.1-items.10") }}</li>
      </ul>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-10.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 11 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-11.title") }}</h3>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("clientArt.art-11.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-11.1.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("clientArt.art-11.2.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-11.2.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("clientArt.art-11.3.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-11.3.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("clientArt.art-11.4.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-11.4.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 12 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-12.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-12.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-12.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-12.3") }}</p>
      <div class="py-3"></div>

      <!-- Article 13 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-13.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-13.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 14 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-14.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-14.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 15 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-15.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-15.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-15.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-15.3") }}</p>
      <div class="py-3"></div>

      <!-- Article 16 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-16.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-16.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 17 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-17.title") }}</h3>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("clientArt.art-17.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-17.1.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-17.1.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-17.1.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-17.1.1-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-17.1.1-items.4") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("clientArt.art-17.1.1-items.5") }}</li>
      </ul>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-17.1.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-17.1.3") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("clientArt.art-17.2.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-17.2.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 18 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-18.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-18.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 19 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-19.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-19.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 20 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-20.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-20.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 21 -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.art-21.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.art-21.1") }}</p>
      <div class="py-3"></div>

      <!-- Formulaire de retractation -->
      <h3 class="text-lg font-semibold">{{ $t("clientArt.form-ret.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("clientArt.form-ret.1") }}</p>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("clientArt.form-ret.2") }}</p>
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
