<template>
  <div class="static blog-page">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-8"></div>

    <!-- Blog Item -->
    <div v-if="blogPost" class="lg:px-24 md:px-20 px-8">
      <div class="flex flex-col md:flex-row w-full">
        <div class="w-full md:w-5/12">
          <!-- TODO -->
        </div>
        <div class="w-full md:w-7/12">
          <img :src="blogPost?.imageUrl" :alt="blogPost?.imageAlt ?? 'Blog Image'" class="w-full rounded-2xl image" loading="lazy"/>
        </div>
      </div>
    </div>
    <div v-else class="lg:px-24 md:px-20 px-8">TODO2</div>

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
import { BlogItem } from "../../services/blog/type";
import { fetchBlogItemById } from "../../services/blog/service";

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
  name: "BlocDetailsPage",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      blogPost: null as BlogItem | null,
      id: this.$route.params.id,
    };
  },
  async fetch(this: any) {
    const items = (this.$store.state.blog.blogPosts as BlogItem[] | null)?.filter((item) => item.id === this.id);
    if (items && items.length > 0) {
      this.blogPost = items[0];
      return;
    }

    const res = await fetchBlogItemById(this.id);
    this.blogPost = res;
  },

  i18n,
});
</script>
