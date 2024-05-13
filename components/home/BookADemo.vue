<template>
  <div class="bg-darkblue py-40 px-8 md:px-14 lg:px-20 xl:px-28">
    <!-- web view -->
    <div class="hidden xl:grid grid-cols-[75%_25%] gap-x-[8px] h-[700px]">
      <div class="bento-box bg-lowwhite h-full"></div>
      <div class="h-full flex flex-col">
        <div class="bento-box bg-low-primary h-[26%] px-6 py-6 flex justify-center items-center">
          <h1 class="coachly-main-title color-white">
            {{ $t("homeVideo.title.1") }}
            <span class="primary-color">{{ $t("homeVideo.title.2") }}</span>
            {{ $t("homeVideo.title.3") }}
          </h1>
        </div>
        <div class="h-[1%]"></div>
        <div class="bento-box bg-lowwhite h-[36%] px-6 py-6 flex flex-col justify-between">
          <div class="overflow-hidden">
            <h3 class="bento-title color-white">
              {{ $t("homeVideo.sec1.title") }}
            </h3>
            <p class="body color-white">
              {{ $t("homeVideo.sec1.body") }}
            </p>
          </div>
          <!-- TODO page to book a demo -->
          <a href="" class="link-primary flex flex-row items-center">
            {{ $t("homeVideo.sec1.link") }}
            <div class="px-1"></div>
            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5.33035 5L1 9" stroke="#2858ff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
        <div class="h-[1%]"></div>
        <div class="bento-box bg-lowwhite h-[36%] px-6 py-6 flex flex-col justify-between">
          <div>
            <h3 class="bento-title color-white">
              {{ $t("homeVideo.sec2.title") }}
            </h3>
            <p class="body color-white">
              {{ $t("homeVideo.sec2.body") }}
            </p>
          </div>
          <div>
            <h5 class="bento-subtitle color-white">
              {{ $t("homeVideo.sec2.subtitle") }}
            </h5>
            <div class="py-1"></div>
            <div class="flex flex-row">
              <!-- TODO link -->
              <a href="" target="_blank">
                <img src="~/static/app_store_button.svg" alt="App Store" />
              </a>
              <div class="px-2"></div>
              <!-- TODO link -->
              <a href="" target="_blank">
                <img src="~/static/play_store_button.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TODO -->
  </div>
</template>

<script lang="ts">
export default {
  name: "BookADemo",
};
</script>
