<template>
  <div class="w-full static h-auto xl:h-[calc(100vh-82px)] overflow-hidden main-view">
    <!-- Web only -->
    <div class="hidden xl:flex flex-row h-full">
      <div class="w-4/10 h-full px-8 md:px-14 lg:px-20 xl:pl-28 xl:pr-12 flex flex-col justify-center">
        <h1 class="coachly-main-title">
          {{ $t("homeMainView.title.1") }}
          <span class="orange-color">{{ $t("homeMainView.title.2") }}</span>
          {{ $t("homeMainView.title.3") }}
        </h1>
        <div class="py-2"></div>
        <p class="body w-3/4">
          <!-- TODO plus fin ici font light à import -->
          {{ $t("homeMainView.body") }}
        </p>
        <div class="py-4"></div>
        <!-- TODO FIT from text -->
        <div class="secondary-button" style="width: 40% !important" @click="() => {}">
          {{ $t("homeMainView.discover") }}
        </div>
      </div>


      <!-- Visuel animé des apps coachs -->
      <div class="w-6/10 h-full flex items-center justify-end">
          <img class="block main-web-img"src="~/static/main-home.png" alt="Coachly Web Application" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000" />
      </div>
    </div>

    <!-- Tablet and Mobile Design -->
    <div class="flex flex-col xl:hidden h-auto">
      <div class="px-8 md:px-14 lg:px-20 xl:px-28">
        <div class="py-2"></div>
        <h1 class="coachly-main-title">
          {{ $t("homeMainView.title.1") }}
          <span class="orange-color">{{ $t("homeMainView.title.2") }}</span>
          {{ $t("homeMainView.title.3") }}
        </h1>
        <div class="py-2"></div>
        <p class="body">
          {{ $t("homeMainView.body") }}
        </p>
        <div class="py-2"></div>
        <div class="secondary-button" style="width: 60% !important" @click="() => {}">
          {{ $t("homeMainView.discover") }}
        </div>
        <div class="py-4"></div>
      </div>
      <img class="block px-10" src="~/static/img-main-resp.png" alt="Coachly Web Application" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomeMainView",
};
</script>
