<template>
  <div class="w-full">
    <!-- List of logo -->
    <div class="px-8 md:px-14 lg:px-28 w-full grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-[8px]">
      <div class="px-1">
        <div class="lowblue-bento-box h-auto md:h-[230px] w-full flex items-center justify-center px-8 py-8" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
          <h1 class="coachly-main-title">
            {{ $t("trustUsTitle.1") }}
            <span class="primary-color">{{ $t("trustUsTitle.2") }}</span>
          </h1>
        </div>
      </div>

      <div class="px-1">
        <div class="bento-box h-auto md:h-[230px] w-full flex items-center justify-center px-8 py-8" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
          <!-- TODO -->
        </div>
      </div>
    </div>

    <div class="py-3 md:py-1"></div>

    <!-- Nombre de coach, stats global -->
    <div class="px-8 md:px-14 lg:px-28 w-full grid grid-cols-1 md:grid-cols-[23%_23%_23%_31%] gap-y-[8px]">
      <div class="flex md:hidden px-1">
        <div class="lowblue-bento-box h-full h-auto md:w-full flex items-center justify-center px-6 py-5" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="coachly-main-title">
            <span class="primary-color">{{ $t("enrollNowTitle.1") }}</span>
            {{ $t("enrollNowTitle.2") }}
          </h1>
        </div>
      </div>

      <div class="px-1">
        <div class="bento-box h-full h-auto md:w-full flex flex-col items-start justify-center px-6 py-5" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="bento-value">{{ $t("enrollSection.first.value") }}</h2>
          <h4 class="bento-subtitle">{{ $t("enrollSection.first.title") }}</h4>
        </div>
      </div>

      <div class="px-1">
        <div class="bento-box h-full h-auto md:w-full flex flex-col items-start justify-center px-6 py-5" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="bento-value">{{ $t("enrollSection.second.value") }}</h2>
          <h4 class="bento-subtitle">{{ $t("enrollSection.second.title") }}</h4>
        </div>
      </div>

      <div class="px-1">
        <div class="bento-box h-full h-auto md:w-full flex flex-col items-start justify-center px-6 py-5" data-aos="fade-up" data-aos-duration="1000">
          <h2 class="bento-value">{{ $t("enrollSection.third.value") }}</h2>
          <h4 class="bento-subtitle">{{ $t("enrollSection.third.title") }}</h4>
        </div>
      </div>

      <div class="hidden md:flex px-1">
        <div class="lowblue-bento-box h-full h-auto md:w-full flex items-center justify-center px-6 py-5" data-aos="fade-up" data-aos-duration="1000">
          <h1 class="coachly-main-title">
            <span class="primary-color">{{ $t("enrollNowTitle.1") }}</span>
            {{ $t("enrollNowTitle.2") }}
          </h1>
        </div>
      </div>
    </div>

    <!-- List of stats -->
  </div>
</template>

<script lang="ts">
import FormattedText from "../FormattedText.vue";

export default {
  name: "HeTrustUsBento",
  components: {
    FormattedText,
  },
};
</script>
