<template>
    <div class="static tutorial-page">
      <!-- Barre de navigation -->
      <NavBar />
  
      <!-- Space before contact grid (only on tablet / web)  -->
      <div class="md:py-8"></div>
  
      <!-- Tutorial details -->
      <div class="lg:px-24 md:px-20 px-8 flex md:flex-row">
        <div class="hidden lg:flex sticky top-[85px] md:z-49 h-min md:w-2/12 px-4 py-6 tutorial-redirect-list flex flex-col">
          <!-- All the tutorial -->
          <h3 class="section-title">{{ $t("tutorialProfil.title") }}</h3>
          <a href="/tuto/complete-account" class="section-link" :class="{ 'link-active': isActive('complete-account') }">{{ $t("tutorialProfil.complete-account.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/authentify-your-enterprise" class="section-link" :class="{ 'link-active': isActive('authentify-your-enterprise') }">{{ $t("tutorialProfil.authentify-your-enterprise.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/handle-special-offer" class="section-link" :class="{ 'link-active': isActive('handle-special-offer') }">{{ $t("tutorialProfil.handle-special-offer.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/handle-subscription" class="section-link" :class="{ 'link-active': isActive('handle-subscription') }">{{ $t("tutorialProfil.handle-subscription.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/create-modify-program" class="section-link" :class="{ 'link-active': isActive('create-modify-program') }">{{ $t("tutorialProfil.create-modify-program.title") }}</a>
  
          <div class="py-2"></div>
          <h3 class="section-title">{{ $t("tutorialCoaching.title") }}</h3>
          <a href="/tuto/take-private-appointment" class="section-link" :class="{ 'link-active': isActive('take-private-appointment') }">{{ $t("tutorialCoaching.take-private-appointment.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/create-public-appointment" class="section-link" :class="{ 'link-active': isActive('create-public-appointment') }">{{ $t("tutorialCoaching.create-public-appointment.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/send-special-offer" class="section-link" :class="{ 'link-active': isActive('send-special-offer') }">{{ $t("tutorialCoaching.send-special-offer.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/send-subscription-offer" class="section-link" :class="{ 'link-active': isActive('send-subscription-offer') }">{{ $t("tutorialCoaching.send-subscription-offer.title") }}</a>
          <div class="py-0.5"></div>
          <a href="/tuto/shared-a-program" class="section-link" :class="{ 'link-active': isActive('shared-a-program') }">{{ $t("tutorialCoaching.shared-a-program.title") }}</a>
          <div class="py-0.5"></div>
  
          <div class="py-3"></div>
          <h3 class="section-title">{{ $t("tutorialPayment.title") }}</h3>
          <a href="/tuto/service-fee" class="section-link" :class="{ 'link-active': isActive('service-fee') }">{{ $t("tutorialPayment.service-fee.title") }}</a>
          <div class="py-0.5"></div>
  
          <!-- <div class="py-3"></div>
          <h3 class="section-title">{{ $t('tutorialOther.title') }}</h3>
          <div class="py-1"></div> -->
        </div>
        <div class="hidden md:block md:px-2"></div>
  
        <div class="w-full">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc
          </p>
        </div>
  
        <!-- Scroll list -->
      </div>
  
      <!-- Footer -->
      <div class="py-8"></div>
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import NavBar from "../../components/NavBar.vue";
  import Footer from "../../components/Footer.vue";
  import Vue from "vue";
  import VueI18n from "vue-i18n";
  
  import translationFR from "../../lang/fr-FR";
  import translationEN from "../../lang/en-US";
  
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
      Footer,
    },
    data() {
      return {
        topOffset: 0,
      };
    },
    methods: {
      isActive(name: string) {
        return (this.$route.path as string).includes(name);
      },
      calculateTopOffset() {
        const navbar = this.$el.querySelector('.navbar');
        this.topOffset = navbar.offsetHeight; // Obtenez la hauteur de la navbar et ajustez le top de .content
      },
    },
    i18n,
  });
  </script>
  