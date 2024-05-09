<template>
  <div class="w-full">
    <div class="px-8 md:px-14 lg:px-28">
      <div class="hidden xl:grid xl:grid-cols-[20%_20%_35%_25%]">
        <div class="px-1">
          <img class="bento-img" src="~/static/home/client_app_1.png" alt="Coachly Application Screen 1" width="100%" data-aos="fade-up" data-aos-duration="1000" />
        </div>

        <div class="px-1">
          <img class="bento-img" src="~/static/home/client_app_2.png" alt="Coachly Application Screen 1" width="100%" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" />
        </div>

        <div class="px-1 flex flex-col h-full w-full gap-y-[8px]">
          <div class="lowgreen-bento-box w-full px-8 py-8" data-aos="fade-up" data-aos-duration="1000">
            <h1 class="coachly-main-title">
              {{ $t("homeClientApp.title.1") }}
              <span class="green-color">{{ $t("homeClientApp.title.2") }}</span>
              {{ $t("homeClientApp.title.3") }}
            </h1>
          </div>

          <div class="bento-box h-full w-full px-8 py-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div>
              <h3 class="bento-title">
                {{ $t("homeClientApp.sec1.title") }}
              </h3>
              <div class="py-0.5"></div>
              <FormattedText :text="$t('homeClientApp.sec1.body').toString()" class="darkgrey" />
              <div class="py-0.5"></div>
            </div>
            <a href="/client-app" class="flex items-center link-green">
              {{ $t("discoverFunctionnalty") }}
              <div class="px-1"></div>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.33035 5L1 9" stroke="#C5DB53" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="bento-box h-auto w-full px-8 py-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("getCoachlyClient") }}
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

        <div class="px-1 flex flex-col h-full w-full gap-y-[8px]">
          <div class="bento-box h-full w-full px-6 py-5 flex-1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("homeClientApp.sec2.title") }}
            </h3>
            <h4 class="bento-subtitle">{{ $t("homeClientApp.sec2.subtitle") }}</h4>
            <p class="flex-1 overflow-hidden">
              <FormattedText :text="$t('homeClientApp.sec3.body').toString()" class="darkgrey" />
            </p>
          </div>
          <div class="bento-box lowgreen-bento-box h-full w-full px-6 py-5 flex-1" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("homeClientApp.sec3.title") }}
            </h3>
            <h4 class="bento-subtitle">{{ $t("homeClientApp.sec3.subtitle") }}</h4>
            <p class="flex-1 overflow-hidden">
              <FormattedText :text="$t('homeClientApp.sec3.body').toString()" class="darkgrey" />
            </p>
          </div>
          <div class="bento-box h-full w-full flex flex-col px-6 py-5 flex-1" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("homeClientApp.sec4.title") }}
            </h3>
            <h4 class="bento-subtitle">{{ $t("homeClientApp.sec4.subtitle") }}</h4>
            <p class="flex-1 overflow-hidden">
              <FormattedText :text="$t('homeClientApp.sec4.body').toString()" class="darkgrey" />
            </p>
          </div>
        </div>
      </div>

      <!-- Tablet and basic desktop version -->
      <div class="hidden md:flex md:flex-col xl:hidden">
        <div class="grid grid-cols-[40%_60%]">
          <div class="px-1">
            <img class="bento-img" src="~/static/home/client_app_1.png" alt="Coachly Application Screen 1" width="100%" data-aos="fade-up" data-aos-duration="1000" />
          </div>
          <div class="px-1 flex flex-col h-full w-full gap-y-[8px]">
            <div class="lowgreen-bento-box w-full px-8 py-8" data-aos="fade-up" data-aos-duration="1000">
              <h1 class="coachly-main-title">
                {{ $t("homeClientApp.title.1") }}
                <span class="green-color">{{ $t("homeClientApp.title.2") }}</span>
                {{ $t("homeClientApp.title.3") }}
              </h1>
            </div>

            <div class="bento-box h-max w-full px-8 py-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div>
                <h3 class="bento-title">
                  {{ $t("homeClientApp.sec1.title") }}
                </h3>
                <div class="py-0.5"></div>
                <FormattedText :text="$t('homeClientApp.sec1.body').toString()" class="darkgrey" />
                <div class="py-0.5"></div>
              </div>
              <a href="/client-app" class="flex items-center link-green">
                {{ $t("discoverFunctionnalty") }}
                <div class="px-1"></div>
                <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5.33035 5L1 9" stroke="#C5DB53" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
            <div class="bento-box h-auto w-full px-8 py-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <h3 class="bento-title">
                {{ $t("getCoachlyClient") }}
              </h3>
              <div class="py-2"></div>
              <div class="flex flex-row justify-between">
                <!-- TODO link -->
                <a href="" target="_blank">
                  <img src="~/static/app_store_button.svg" alt="App Store" />
                </a>
                <!-- TODO link -->
                <a href="" target="_blank">
                  <img src="~/static/play_store_button.svg" alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="py-6"></div>

        <div class="grid grid-cols-[60%_40%]">
          <div class="px-1 flex flex-col h-auto w-full gap-y-[8px]">
            <div class="bento-box h-auto w-full px-6 py-5 flex-1" data-aos="fade-right" data-aos-duration="1000">
              <h3 class="bento-title">
                {{ $t("homeClientApp.sec2.title") }}
              </h3>
              <h4 class="bento-subtitle">{{ $t("homeClientApp.sec2.subtitle") }}</h4>
              <p class="flex-1 overflow-hidden">
                <FormattedText :text="$t('homeClientApp.sec3.body').toString()" class="darkgrey" />
              </p>
            </div>
            <div class="bento-box lowgreen-bento-box h-auto w-full px-6 py-5 flex-1" data-aos="fade-right" data-aos-duration="1000">
              <h3 class="bento-title">
                {{ $t("homeClientApp.sec3.title") }}
              </h3>
              <h4 class="bento-subtitle">{{ $t("homeClientApp.sec3.subtitle") }}</h4>
              <p class="flex-1 overflow-hidden">
                <FormattedText :text="$t('homeClientApp.sec3.body').toString()" class="darkgrey" />
              </p>
            </div>
            <div class="bento-box h-auto w-full flex flex-col px-6 py-5 flex-1" data-aos="fade-right" data-aos-duration="1000">
              <h3 class="bento-title">
                {{ $t("homeClientApp.sec4.title") }}
              </h3>
              <h4 class="bento-subtitle">{{ $t("homeClientApp.sec4.subtitle") }}</h4>
              <p class="flex-1 overflow-hidden">
                <FormattedText :text="$t('homeClientApp.sec4.body').toString()" class="darkgrey" />
              </p>
            </div>
          </div>
          <div class="px-1">
            <img class="bento-img" src="~/static/home/client_app_2.png" alt="Coachly Application Screen 1" width="100%" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" />
          </div>
        </div>
      </div>

      <!-- Phone version -->
      <div class="flex md:hidden flex-col">
        <div class="px-1 flex flex-col h-full w-full gap-y-[8px]">
          <div class="lowgreen-bento-box w-full px-8 py-8" data-aos="fade-up" data-aos-duration="1000">
            <h1 class="coachly-main-title">
              {{ $t("homeClientApp.title.1") }}
              <span class="green-color">{{ $t("homeClientApp.title.2") }}</span>
              {{ $t("homeClientApp.title.3") }}
            </h1>
          </div>

          <div class="bento-box h-max w-full px-8 py-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div>
              <h3 class="bento-title">
                {{ $t("homeClientApp.sec1.title") }}
              </h3>
              <div class="py-0.5"></div>
              <FormattedText :text="$t('homeClientApp.sec1.body').toString()" class="darkgrey" />
              <div class="py-0.5"></div>
            </div>
            <a href="/client-app" class="flex items-center link-green">
              {{ $t("discoverFunctionnalty") }}
              <div class="px-1"></div>
              <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.33035 5L1 9" stroke="#C5DB53" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
          <div class="px-1">
            <img class="bento-img" src="~/static/home/client_app_1.png" alt="Coachly Application Screen 1" width="100%" data-aos="fade-up" data-aos-duration="1000" />
          </div>
          <div class="bento-box h-auto w-full px-6 py-5 flex-1" data-aos="fade-right" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("homeClientApp.sec2.title") }}
            </h3>
            <h4 class="bento-subtitle">{{ $t("homeClientApp.sec2.subtitle") }}</h4>
            <p class="flex-1 overflow-hidden">
              <FormattedText :text="$t('homeClientApp.sec3.body').toString()" class="darkgrey" />
            </p>
          </div>
          <div class="bento-box h-auto w-full px-8 py-5" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <h3 class="bento-title">
              {{ $t("getCoachlyClient") }}
            </h3>
            <div class="py-2"></div>
            <div class="flex flex-row justify-between">
              <!-- TODO link -->
              <a href="" target="_blank">
                <img src="~/static/app_store_button.svg" alt="App Store" />
              </a>
              <!-- TODO link -->
              <a href="" target="_blank">
                <img src="~/static/play_store_button.svg" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FormattedText from "../FormattedText.vue";

export default {
  name: "ClientAppBento",
  components: {
    FormattedText,
  },
};
</script>
