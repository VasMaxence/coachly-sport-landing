<template>
  <div class="static coachly-project">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <!-- <div class="md:py-8"></div> -->

    <!-- All sectio of main page -->

    <!-- Bento with project information and team -->

    <HomeMainView />
    <div class="py-16"></div>
    <ProjectBento />
    <div class="py-20"></div>
    <CoachAppBento />
    <div class="py-8"></div>
    <CoachMobileAppBento />
    <div class="py-20"></div>
    <ClientAppBento />
    <div class="py-20"></div>
    <HeTrustUsBento />
    <div class="py-12"></div>
    <BookADemo />
    <div class="py-6"></div>
    <NewsletterInput />
    <div class="py-6"></div>
    <!-- TODO Blog Items... -->
    <BlogPost />

    <!-- Footer -->
    <div class="py-8"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "~/components/NavBar.vue";
import Footer from "~/components/Footer.vue";
import HomeMainView from "~/components/home/HomeMainView.vue";
import BookADemo from "~/components/home/BookADemo.vue";
import CoachAppBento from "~/components/home/CoachAppBento.vue";
import CoachMobileAppBento from "~/components/home/CoachMobileAppBento.vue";
import ClientAppBento from "~/components/home/ClientAppBento.vue";
import BlogPost from "~/components/home/BlogPost.vue";
import ProjectBento from "~/components/home/ProjectBento.vue";
import NewsletterInput from "~/components/NewsletterInput.vue";
import HeTrustUsBento from "~/components/home/HeTrustUsBento.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";

import translationFR from "~/lang/fr-FR";
import translationEN from "~/lang/en-US";

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
    HomeMainView,
    CoachAppBento,
    CoachMobileAppBento,
    ClientAppBento,
    ProjectBento,
    BookADemo,
    BlogPost,
    HeTrustUsBento,
    NewsletterInput,
    Footer,
  },
  i18n,
});
</script>
