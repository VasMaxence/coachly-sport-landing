<template>
  <div class="px-8 md:px-14 lg:px-28 w-full grid grid-cols-1 md:grid-cols-[50%_50%] xl:grid-cols-[30%_30%_20%_20%] gap-y-[8px] xl:gap-y-0">
    <!-- First column: Coachly objectivs -->
    <div class="w-full flex flex-col gap-y-[8px] px-1">
      <div class="lowblue-bento-box h-auto md:h-[145px] w-full flex items-center justify-center px-8 py-8" data-aos="fade-right" data-aos-duration="1000">
        <h1 class="coachly-main-title">
          <span class="primary-color">{{ $t("indexBentoTitle.1") }}</span>
          {{ $t("indexBentoTitle.2") }}
        </h1>
      </div>
      <div class="bento-box h-auto md:h-[435px] w-full px-6 py-6 overflow-hidden" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
        <h4 class="bento-title">{{ $t("indexBentoBody.title") }}</h4>
        <div class="py-2"></div>
        <FormattedText :text="$t('indexBentoBody.content').toString()" class="darkgrey" />
      </div>
    </div>

    <!-- Second column: Who we are -->
    <div class="w-full flex flex-col gap-y-[8px] px-1">
      <div class="hidden md:flex md:flex-col bento-box h-auto md:h-full w-full px-6 py-6 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <h4 class="bento-title">{{ $t("indexBento2Body.title") }}</h4>
        <div class="py-2"></div>
        <FormattedText :text="$t('indexBento2Body.content').toString()" class="darkgrey" />
      </div>
      <div class="lowblue-bento-box h-auto md:h-auto w-full flex items-center justify-center px-8 py-8" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
        <h1 class="coachly-main-title">
          {{ $t("indexBentoTitle2.1") }}
          <span class="primary-color">{{ $t("indexBentoTitle2.2") }}</span>
          {{ $t("indexBentoTitle2.3") }}
        </h1>
      </div>
      <div class="flex md:hidden flex-col bento-box h-auto md:h-full w-full px-6 py-6 overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
        <h4 class="bento-title">{{ $t("indexBento2Body.title") }}</h4>
        <div class="py-2"></div>
        <FormattedText :text="$t('indexBento2Body.content').toString()" class="darkgrey" />
      </div>
    </div>

    <!-- Third Column -->
    <div class="hidden lg:flex w-full flex-col gap-y-[8px] px-1">
      <div class="lowblue-bento-box h-auto md:h-[280px] w-full" data-aos="fade-down" data-aos-duration="1000"></div>
      <div class="bento-box h-auto md:h-full w-full" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000"></div>
    </div>

    <!-- Fourth Column -->
    <div class="w-full hidden lg:flex flex-col gap-y-[8px] px-1">
      <div class="bento-box h-auto md:h-full w-full" data-aos="fade-down" data-aos-duration="1000"></div>
      <div class="lowblue-bento-box h-auto md:h-[280px] w-full" data-aos="fade-left" data-aos-duration="1000"></div>
    </div>
  </div>
</template>

<script lang="ts">
import FormattedText from "../FormattedText.vue";

export default {
  name: "ProjectBento",
  components: {
    FormattedText,
  },
};
</script>
