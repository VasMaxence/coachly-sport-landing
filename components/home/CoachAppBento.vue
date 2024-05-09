<template>
  <div class="w-full">
    <div class="px-8 md:px-14 lg:px-28">
      <!-- Web interface -->
      <div class="hidden xl:grid xl:grid-cols-[65%_35%]">
        <!-- IMG -->
        <div class="px-1">
          <img src="~/static/home/web-main.png" alt="Coachly Web Application" width="100%" data-aos="fade-up" data-aos-duration="1000" />
        </div>

        <!-- BENTO -->
        <div class="px-1 flex flex-col h-full w-full gap-y-[8px]">
          <div class="lowograne-bento-box w-full px-8 py-6" data-aos="fade-up" data-aos-duration="1000">
            <h1 class="coachly-main-title">
              {{ $t("homeCoachApp.title.1") }}
              <span class="orange-color">{{ $t("homeCoachApp.title.2") }}</span>
            </h1>
          </div>

          <div class="bento-box h-full w-full px-8 py-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div>
              <h3 class="bento-title">
                {{ $t("homeCoachApp.sec1.title") }}
              </h3>
              <div class="py-0.5"></div>
              <FormattedText :text="$t('homeCoachApp.sec1.body').toString()" class="darkgrey" />
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
        </div>
      </div>
    </div>

    <!-- Mobile and tablette interface -->
    <div class="px-8 md:px-14 lg:px-28">
      <!-- Web interface -->
      <div class="flex xl:hidden flex-col">
        <div class="lowograne-bento-box w-full px-8 py-6" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="coachly-main-title">
            {{ $t("homeCoachApp.title.1") }}
            <span class="orange-color">{{ $t("homeCoachApp.title.2") }}</span>
          </h1>
        </div>

        <div class="py-2"></div>

        <!-- IMG -->
        <div class="px-1">
          <img src="~/static/home/web-main.png" alt="Coachly Web Application" width="100%" data-aos="fade-up" data-aos-duration="1000" />
        </div>

        <div class="py-2"></div>

        <!-- BENTO -->
        <div class="bento-box h-auto w-full px-8 py-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <div>
            <h3 class="bento-title">
              {{ $t("homeClientApp.sec1.title") }}
            </h3>
            <div class="py-0.5"></div>
            <FormattedText :text="$t('homeClientApp.sec1.body').toString()" class="darkgrey" />
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CoachAppBento",
};
</script>
