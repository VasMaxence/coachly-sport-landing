<template>
  <div class="px-8 md:px-14 lg:px-44 w-full grid grid-cols-1 md:grid-cols-[50%_50%] xl:grid-cols-[30%_30%_20%_20%] gap-x-[11px] gap-y-[8px]">
    <!-- First column: Coachly objectivs -->
    <div class="w-full flex flex-col gap-y-[8px]">
      <div class="lowblue-bento-box h-auto md:h-[145px] w-full"></div>
      <div class="bento-box h-auto md:h-[435px] w-full"></div>
    </div>

    <!-- Second column: Who we are -->
    <div class="w-full flex flex-col  gap-y-[8px]">
      <div class="bento-box h-auto md:h-[435px] w-full"></div>
      <div class="lowblue-bento-box h-auto md:h-[145px] w-full"></div>
    </div>

    <!-- Third Column -->
    <div class="w-full flex flex-col  gap-y-[8px]">
      <div class="lowblue-bento-box h-auto md:h-[145px] w-full"></div>
      <div class="bento-box h-auto md:h-[435px] w-full"></div>
    </div>

    <!-- Fourth Column -->
    <div class="w-full flex flex-col  gap-y-[8px]">
      <div class="bento-box h-auto md:h-[435px] w-full"></div>
      <div class="lowblue-bento-box h-auto md:h-[145px] w-full"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProjectBento",
};
</script>
