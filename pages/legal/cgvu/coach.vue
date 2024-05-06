<template>
  <div class="static">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-6"></div>

    <!-- Legal mentions list -->
    <div class="lg:px-24 md:px-20 px-8">
      <div class="flex justify-center">
        <h1 class="text-4xl font-semibold">{{ $t("cgvuCoachTitle") }}</h1>
      </div>
      <div class="py-6"></div>

      <!-- Préambule -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.start") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.2") }}</p>
      <div class="py-0.5"></div>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.start-body.2-line.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.start-body.2-line.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.start-body.2-line.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.start-body.2-line.4") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.start-body.2-line.5") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.start-body.2-line.6") }}</li>
      </ul>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.3") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.4") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.5") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.6") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.start-body.7") }}</p>
      <div class="py-3"></div>

      <!-- Article 1 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-1.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-1.1") }}</p>
      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.1.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.1.def") }}</p>
        </div>
      </div>
      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.2.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.2.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.3.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.3.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.4.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.4.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.5.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.5.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.6.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.6.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.7.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.7.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.8.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.8.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.9.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.9.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.10.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.10.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.11.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.11.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.12.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.12.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.13.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.13.def") }}</p>
        </div>
      </div>

      <div class="py-1"></div>
      <div class="flex justify-between items-center">
        <div style="flex: 1">
          <p class="text-base font-normal">{{ $t("coachArt.art-1.1-items.14.name") }}</p>
        </div>
        <div style="flex: 3">
          <p class="text-base font-semibold">{{ $t("coachArt.art-1.1-items.14.def") }}</p>
        </div>
      </div>
      <div class="py-3"></div>

      <!-- Article 2 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-2.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-2.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-2.2") }}</p>
      <div class="py-3"></div>

      <!-- Article 3 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-3.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-3.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 4 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-4.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-4.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 5 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-5.title") }}</h3>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-5.1.title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.1.1") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.1.2") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.1.3") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.1.4") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.1.5") }}</p>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-5.2.title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.2.1") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.2.2") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.2.3") }}</p>
      <p class="text-base font-normal">{{ $t("coachArt.art-5.2.4") }}</p>
      <div class="py-3"></div>

      <!-- Article 6 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-6.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-6.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-6.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-6.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-6.1-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-6.1-items.4") }}</li>
      </ul>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-6.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-6.3") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-6.4") }}</p>
      <div class="py-3"></div>

      <!-- Article 7 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-7.title") }}</h3>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-7.1.title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.1.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.1.2") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.1.2-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.1.2-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.1.2-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.1.2-items.4") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.1.2-items.5") }}</li>
      </ul>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.1.3") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-7.2.title") }}</h4>
      <div class="py-1"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-7.2.1.title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.1.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.1.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.1.3") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.1.4") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-7.2.2.title") }}</h4>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.2.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.3") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.4") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.5") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.6") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.7") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-7.2.2.1-items.8") }}</li>
      </ul>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.2.2") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-7.2.3.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.3.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-7.2.4.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-7.2.4.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 8 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-8.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-8.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 9 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-9.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.3") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.4") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.5") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.6") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.7") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.8") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-9.9") }}</p>
      <div class="py-3"></div>

      <!-- Article 10 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-10.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-10.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 11 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-11.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-11.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 12 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-12.title") }}</h3>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-12.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 13 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-13.title") }}</h3>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-13.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.1.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-13.2.title") }}</h4>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-13.2.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.1.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-13.2.2.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.2.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-13.2.3.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.3.1") }}</p>
      <ul>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-13.2.3.1-items.1") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-13.2.3.1-items.2") }}</li>
        <li class="text-base font-normal pl-4">- {{ $t("coachArt.art-13.2.3.1-items.3") }}</li>
      </ul>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.3.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.3.3") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.3.4") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.3.5") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-13.2.3.6") }}</p>
      <div class="py-3"></div>

      <!-- Article 14 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-14.title") }}</h3>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-14.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.1.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.1.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.1.3") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.1.4") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-14.2.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.2.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.2.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.2.3") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-14.3.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.3.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.3.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-14.3.3") }}</p>
      <div class="py-3"></div>

      <!-- Article 15 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-15.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-15.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-15.2") }}</p>
      <div class="py-3"></div>

      <!-- Article 16 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-16.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-16.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 17 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-17.title") }}</h3>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-17.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.1.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.1.2") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.1.3") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-17.2.title") }}</h4>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-17.2.1.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.2.1.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.2.1.2") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-17.2.2.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.2.2.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-17.2.3.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.2.3.1") }}</p>
      <div class="py-2"></div>
      <h4 class="text-base font-semibold">{{ $t("coachArt.art-17.2.4.title") }}</h4>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-17.2.4.1") }}</p>
      <div class="py-3"></div>

      <!-- Article 18 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-18.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-18.1") }}</p>
      <div class="py-0.5"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-18.2") }}</p>
      <div class="py-3"></div>

      <!-- Article 19 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-19.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-19.1") }}</p>
      <div class="py-3"></div>
      
      <!-- Article 20 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-20.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-20.1") }}</p>
      <div class="py-3"></div>
      
      <!-- Article 21 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-21.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-21.1") }}</p>
      <div class="py-3"></div>
      
      <!-- Article 22 -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.art-22.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.art-22.1") }}</p>
      <div class="py-3"></div>
      
      <!-- Formulaire de retractation -->
      <h3 class="text-lg font-semibold">{{ $t("coachArt.form-ret.title") }}</h3>
      <div class="py-2"></div>
      <p class="text-base font-normal">{{ $t("coachArt.form-ret.1") }}</p>
      <div class="py-1"></div>
      <p class="text-base font-normal">{{ $t("coachArt.form-ret.2") }}</p>
      <div class="py-3"></div>

    </div>

    <!-- FOOTER Widget -->
    <div class="py-8"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../../../components/NavBar.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";

import translationFR from "../../../lang/fr-FR";
import translationLegalFR from "../../../lang/legal/fr-FR";
import translationEN from "../../../lang/en-US";
import translationLegalEN from "../../../lang/legal/en-US";

Vue.use(VueI18n);

const messages = {
  fr: {
    ...translationFR,
    ...translationLegalFR,
  },
  en: {
    ...translationEN,
    ...translationLegalEN,
  },
};

const i18n = new VueI18n({
  locale: "fr", // set locale
  messages, // set locale messages
});

export default Vue.extend({
  name: "LegalMentionsPage",
  components: {
    NavBar,
  },
  i18n,
});
</script>
