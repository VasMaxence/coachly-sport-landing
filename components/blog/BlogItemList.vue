<template>
  <div>
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

    <div v-if="maxPage > 1" class="flex items-center justify-center py-6">
      <div class="inline-flex mt-2 xs:mt-0 gap-2">
        <button class="flex items-center justify-center px-4 h-10 text-base font-medium blog-pagination-button" @click="previousPage" :disabled="currentPage === 1">{{ $t("blogPrev") }}</button>
        <button class="flex items-center justify-center px-4 h-10 text-base font-medium blog-pagination-button" @click="nextPage" :disabled="currentPage === maxPage">{{ $t("blogNext") }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchBlogList } from "../../services/blog/service";
import { BlogItem } from "../../services/blog/type";

export default {
  name: "BlogItemList",
  components: {},
  data() {
    return {
      blogPosts: [] as BlogItem[],
      currentPage: 1,
      maxPage: 1,
    };
  },
  methods: {
    async nextPage(this: any) {
      this.currentPage++;
      this.blogPosts = [];
      // await Delay(1000);
      this.fetchPost(this.currentPage);
    },
    async previousPage(this: any) {
      this.currentPage--;
      this.blogPosts = [];
      this.fetchPost(this.currentPage);
    },
    async fetchPost(this: any, pageNumber: number = 1) {
      const itemsOnPageNumber = (this.$store.state.blog.blogPosts as BlogItem[] | null)?.filter((item) => item._page === pageNumber);
      if (itemsOnPageNumber && itemsOnPageNumber.length > 0) {
        this.blogPosts = itemsOnPageNumber;
        this.currentPage = pageNumber;
        return;
      }

      const res = await fetchBlogList(pageNumber);
      const totalPages = res.totalPages;
      this.$store.commit("blog/setBlogPosts", { posts: res.blogItems, totalPages });
      this.blogPosts = res.blogItems;
      this.maxPage = totalPages;
    },
  },
  async fetch(this: any) {
    await this.fetchPost(1);
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
