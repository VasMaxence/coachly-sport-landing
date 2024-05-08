<template>
  <div class="tutorial-list flex flex-col">
    <!-- Tutorial profil -->
    <h1 class="section-title">{{ $t("tutorialProfil.title") }}</h1>
    <h3 class="section-desc">{{ $t("tutorialProfil.description") }}</h3>
    <div class="py-2"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 2md:grid-cols-4 3xl:grid-cols-5 gap-4">
      <!-- complete account tutorial -->
      <a href="/tuto/complete-account" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/complete-account.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialProfil.complete-account.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialProfil.complete-account.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- authentify-your-enterprise -->
      <a href="/tuto/authentify-your-enterprise" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/authentify-your-enterprise.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialProfil.authentify-your-enterprise.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialProfil.authentify-your-enterprise.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- handle-special-offer -->
      <a href="/tuto/handle-special-offer" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/handle-special-offer.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialProfil.handle-special-offer.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialProfil.handle-special-offer.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- handle-subscription -->
      <a href="/tuto/handle-subscription" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/handle-subscription.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialProfil.handle-subscription.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialProfil.handle-subscription.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- create-modify-program -->
      <a href="/tuto/create-modify-program" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/create-modify-program.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialProfil.create-modify-program.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialProfil.create-modify-program.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>
    </div>

    <div class="py-6"></div>
    <!-- Tutorial Coaching -->
    <h1 class="section-title">{{ $t("tutorialCoaching.title") }}</h1>
    <h3 class="section-desc">{{ $t("tutorialCoaching.description") }}</h3>
    <div class="py-2"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 2md:grid-cols-4 3xl:grid-cols-5 gap-4">
      <!-- take-private-appointment -->
      <a href="/tuto/take-private-appointment" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/take-private-appointment.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialCoaching.take-private-appointment.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialCoaching.take-private-appointment.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- create-public-appointment -->
      <a href="/tuto/create-public-appointment" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/create-public-appointment.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialCoaching.create-public-appointment.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialCoaching.create-public-appointment.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- send-special-offer -->
      <a href="/tuto/send-special-offer" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/send-special-offer.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialCoaching.send-special-offer.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialCoaching.send-special-offer.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- send-subscription-offer -->
      <a href="/tuto/send-subscription-offer" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/send-subscription-offer.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialCoaching.send-subscription-offer.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialCoaching.send-subscription-offer.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>

      <!-- shared-a-program -->
      <a href="/tuto/shared-a-program" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/shared-a-program.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialCoaching.shared-a-program.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialCoaching.shared-a-program.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>
    </div>

    <div class="py-6"></div>
    <!-- Tutorial Payment -->
    <h1 class="section-title">{{ $t("tutorialPayment.title") }}</h1>
    <h3 class="section-desc">{{ $t("tutorialPayment.description") }}</h3>
    <div class="py-2"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 2md:grid-cols-4 3xl:grid-cols-5 gap-4">
        
      <!-- service-fee -->
      <a href="/tuto/service-fee" class="tutorial-card flex flex-col justify-between">
        <div>
          <img src="~/static/tutorial/main/service-fee.png" alt="Image Guide complétion de compte" class="tutorial-main-image" loading="lazy" />
          <div class="py-2"></div>
          <h2 class="card-title">
            {{ $t("tutorialPayment.service-fee.title") }}
          </h2>
          <div class="py-0.5"></div>
          <p class="card-description format-text">
            <FormattedText :text="$t('tutorialPayment.service-fee.desc')" />
          </p>
        </div>
        <div class="flex items-center card-link">
          {{ $t("tutoGoToPage") }}
          <div class="px-1"></div>
          <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5.33035 5L1 9" stroke="#FCB335" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </a>
    </div>

    <div class="py-6"></div>
    <!-- Tutorial Other -->
    <!-- <h1 class="section-title">{{ $t("tutorialOther.title") }}</h1>
    <h3 class="section-desc">{{ $t("tutorialOther.description") }}</h3>
    <div class="py-2"></div>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="cat in tutorialMap.other" :key="cat" class="">

      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
export default {
  name: "TutorialItemList",
  data() {
    return {
      categories: ["profil", "coaching", "payment", "other"],
      tutorialMap: {
        profil: ["complete-account", "authentify-your-enterprise", "handle-special-offer", "handle-subscription", "create-modify-program"],
        coaching: ["take-private-appointment", "create-public-appointment", "send-special-offer-offer", "send-subscription-offer", "shared-a-program"],
        payment: ["service-fee"],
        other: [],
      },
    };
  },
};
</script>
