<template>
  <div class="static w-full px-8 md:px-14 lg:px-20 xl:px-28">
    <div class="w-full color-lowpink rounded-2xl px-12 py-5">
      <h1 class="coachly-title line-under-start-pink">
        {{ $t("blocTitle.1") }}
        <span class="text-mainpink">{{ $t("blocTitle.2") }}</span>
        {{ $t("blocTitle.3") }}
      </h1>
    </div>

    <div class="py-2"></div>

    <div v-if="!blogPosts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="loading-shimmer">
        <div class="shimmer-line"></div>
      </div>
      <div class="loading-shimmer">
        <div class="shimmer-line"></div>
      </div>
      <div class="loading-shimmer">
        <div class="shimmer-line"></div>
      </div>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <a :href="`blog-details/${post.id}`" v-for="post in blogPosts" :key="post.id" class="blog-card flex flex-col">
        <img :src="post.imageUrl" :alt="post.imageAlt ?? 'Blog Image'" class="card-image" loading="lazy" />
        <div class="py-1"></div>
        <h2 class="card-title">
          {{ post.title }}
        </h2>
        <div class="py-0.5"></div>
        <p class="card-description">
          {{ post.mainDescription }}
        </p>
        <div class="py-2"></div>
        <div class="flex items-center card-link">
          {{ $t("blogGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FF47C5" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { BlogItem } from "~/services/blog/type";
import { fecthBestBlogItem } from "../../services/blog/service";

export default {
  name: "BlogPost",
  components: {},
  data() {
    return {
      blogPosts: [] as BlogItem[],
    };
  },
  methods: {
    async fetchPost(this: any) {
      const res = await fecthBestBlogItem();
      console.log(res);
      this.blogPosts = res;
    },
  },
  async fetch(this: any) {
    console.log("fetching");
    await this.fetchPost();
  },
};
</script>

<style scoped>
.loading-shimmer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 20px;
  background-color: #f9f9fa;
}

.shimmer-line {
  width: 100%;
  height: 550px;
  background: linear-gradient(to right, transparent 0%, #ebebeb 50%, transparent 100%);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(150%);
  }
}
</style>
