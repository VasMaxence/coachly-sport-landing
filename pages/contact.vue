<template>
  <div>
    <NavBar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
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
  locale: "fr", // set locale
  messages, // set locale messages
});

export default Vue.extend({
  name: "IndexPage",
  components: {
    NavBar,
  },
  i18n,
});
</script>
