<template>
  <div class="w-full">
    <div class="px-8 md:px-14 lg:px-28">
      <!-- Web interface -->
      <div class="hidden xl:grid xl:grid-cols-[35%_65%]">
        <!-- BENTO -->
        <div class="px-1 flex flex-col h-full w-full gap-y-[8px]">
          <div class="lowograne-bento-box w-full px-8 py-6" data-aos="fade-up" data-aos-duration="1000">
            <h1 class="coachly-main-title">
              {{ $t("homeCoachMobileApp.title.1") }}
              <span class="orange-color">{{ $t("homeCoachMobileApp.title.2") }}</span>
            </h1>
          </div>

          <div class="bento-box h-full w-full px-8 py-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div>
              <h3 class="bento-title">
                {{ $t("homeCoachMobileApp.sec1.title") }}
              </h3>
              <div class="py-0.5"></div>
              <FormattedText :text="$t('homeCoachMobileApp.sec1.body').toString()" class="darkgrey" />
              <div class="py-0.5"></div>
            </div>
            <a href="/coach-app" class="flex items-center link-orange">
              {{ $t("discoverFunctionnalty") }}
              <div class="px-1"></div>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>

          <div class="bento-box h-auto w-full px-8 py-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("getCoachlyCoach") }}
            </h3>
            <div class="py-2"></div>
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

        <!-- Image -->
        <div class="grid grid-cols-3 justify-center items-center">
          <div class="px-1">
            <img class="bento-img" src="~/static/home/phone-main.png" alt="Coachly Mobile Application" data-aos="fade-up" data-aos-duration="1000" />
          </div>
          <div class="px-1">
            <img class="bento-img" src="~/static/home/phone-main.png" alt="Coachly Mobile Application" data-aos="fade-up" data-aos-duration="1000" />
          </div>
          <div class="px-1">
            <img class="bento-img" src="~/static/home/phone-main.png" alt="Coachly Mobile Application" data-aos="fade-up" data-aos-duration="1000" />
          </div>
        </div>

        <!-- TODO other image... -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CoachMobileAppBento",
};
</script>
