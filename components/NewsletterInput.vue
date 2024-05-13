<template>
  <div class="w-full">
    <div class="px-8 md:px-14 lg:px-28 w-full grid grid-cols-1 md:grid-cols-[30%_70%] gap-y-[8px]">
      <div class="px-1">
        <div class="lowblue-bento-box h-auto md:h-[145px] w-full flex items-center justify-center px-8 py-8" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">
          <h1 class="coachly-main-title">
            {{ $t("newsletterTitle.1") }}
            <span class="primary-color">{{ $t("newsletterTitle.2") }}</span>
          </h1>
        </div>
      </div>

      <div class="px-1">
        <div class="bento-border-box bg-white h-auto md:h-[145px] w-full grid grid-cols-1 md:grid-cols-[70%_5%_25%] px-8 py-6 gap-y-[4px]" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">
          <div class="flex items-center justify-center">
            <CoachlyTextFormField v-model="formData.email" placeholder="newsletterEmail" />
          </div>

          <div class="flex items-center justify-center">
            <div class="vertical-divider"></div>
          </div>

          <div class="flex items-center justify-center">
            <div class="secondary-button" @click="() => signInToNewsletter()">
              <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ $t("joinNewsletter") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FormattedText from "./FormattedText.vue";
import CoachlyTextFormField from "./form-field/TextFormField.vue";

export default {
  name: "NewsletterInput",
  methods: {
    validateField(field: any) {
      if (!(this.formData as any)[field].trim()) {
        return false;
      } else {
        return true;
      }
    },
    signInToNewsletter() {
      if (this.isLoading) return;
      this.isLoading = true;
      if (!this.validateField("email")) {
        this.$toast.error(this.$t("newsletterEmptyData"));
        this.isLoading = false;
        return;
      }

      //   TODO Send message to API
      this.$toast.success(this.$t("newsletterSuccess"));
      this.isLoading = false;
    },
  },
  data() {
    return {
      isLoading: false,
      formData: {
        email: "",
      },
    };
  },
  components: {
    FormattedText,
    CoachlyTextFormField,
  },
};
</script>
