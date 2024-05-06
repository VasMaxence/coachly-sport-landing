<template>
  <div class="static h-full lg:h-screen">
    <!-- Barre de navigation -->
    <NavBar />

    <!-- Space before contact grid (only on tablet / web)  -->
    <div class="md:py-8"></div>

    <!-- Contact box -->
    <div class="py-4 h-3/4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2 lg:px-24 md:px-20 px-8">
      <!-- Left box with main text -->
      <div class="bg-primary border-radius-40 w-full h-full flex flex-col justify-center pt-8 md:pt-12 lg:pt-14 pb-12 md:pb-18 lg:pb-20 px-6 md:px-12 lg:px-16">
        <h1 class="coachly-white-title">{{ $t("contactMessageTitle") }}</h1>
        <div class="py-1"></div>
        <div class="divider"></div>
        <div class="py-1"></div>
        <h2 class="coachly-white-title subtitle">{{ $t("contactMessageOther") }}</h2>
        <div class="py-1"></div>
        <a href="mailto:hello@coachly-sport.fr" class="low-white-button gap-2">
          <!-- SVG -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.80965 3.3303C10.9111 2.8899 13.0889 2.8899 15.1904 3.3303L15.6299 3.42243C17.4434 3.80248 19.0198 4.76242 20.1306 6.09162C20.3119 6.30858 20.2509 6.62141 20.0114 6.78002L13.3743 11.1751C12.5491 11.7215 11.4509 11.7215 10.6257 11.1751L3.98859 6.78002C3.74908 6.62142 3.68812 6.30859 3.86944 6.09162C4.98024 4.76243 6.55658 3.80248 8.37006 3.42243L8.80965 3.3303ZM3.32486 8.18534C3.04693 8.0013 2.65951 8.10681 2.55429 8.41192C2.49553 8.58232 2.44295 8.75548 2.39682 8.93119C1.86773 10.9465 1.86773 13.0536 2.39682 15.0688C3.12141 17.8286 5.43519 19.9625 8.37005 20.5776L8.80965 20.6697C10.9111 21.1101 13.0889 21.1101 15.1904 20.6697L15.6299 20.5776C18.5648 19.9625 20.8786 17.8286 21.6032 15.0688C22.1323 13.0535 22.1323 10.9465 21.6032 8.9312C21.557 8.75548 21.5045 8.58231 21.4457 8.4119C21.3405 8.1068 20.9531 8.00129 20.6751 8.18533L14.2904 12.4132C12.9152 13.3239 11.0848 13.3239 9.70953 12.4132L3.32486 8.18534Z"
              fill="white"
            />
          </svg>
          hello@coachly-sport.fr
        </a>
        <!-- <div class="py-1"></div>
        <a href="tel:+33756825750" class="low-white-button gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.10456 3C6.76773 3 6.43316 3.05136 6.11069 3.15205L5.86419 3.22902C4.42827 3.67739 3.38837 4.95989 3.11805 6.494C2.96065 7.38721 2.96065 8.3051 3.11805 9.19831C3.12424 9.23344 3.13083 9.26843 3.13782 9.30329C4.26404 15.1571 8.84285 19.7359 14.6966 20.8622C14.7315 20.8692 14.7665 20.8758 14.8017 20.882C15.6949 21.0394 16.6128 21.0393 17.506 20.882C19.0401 20.6116 20.3226 19.5717 20.771 18.1358L20.8479 17.8893C20.9486 17.5668 21 17.2323 21 16.8954C21 15.2764 19.5743 14.0769 17.9621 14.0769H14.3456C12.7333 14.0769 11.3077 15.2764 11.3077 16.8954C11.3077 17.2323 11.359 17.5668 11.4597 17.8893L11.5367 18.1358C11.563 18.22 11.5921 18.3028 11.624 18.3842C9.01591 17.0999 6.9001 14.9841 5.61584 12.376C5.69721 12.4079 5.78002 12.437 5.86418 12.4633L6.11069 12.5403C6.43316 12.641 6.76772 12.6923 7.10456 12.6923C8.72358 12.6923 9.92308 11.2667 9.92308 9.65441L9.92308 6.03791C9.92309 4.42565 8.72359 3 7.10456 3Z"
              fill="white"
            />
          </svg>

          07 56 82 57 50
        </a> -->
      </div>

      <!-- Contact Form -->
      <div class="border-box-grey border-radius-40 w-full h-full pt-8 md:pt-12 lg:pt-14 pb-12 md:pb-18 lg:pb-20 px-6 md:px-12 lg:px-16 flex flex-col items-center">
        <!-- Form -->
        <h1 class="coachly-title">{{ $t("contactFormTitle") }}</h1>
        <div class="py-4"></div>
        <form class="w-full" @submit.prevent="handleSubmit">
          <CoachlyTextFormField v-model="formData.name" placeholder="contactNameAndLastnameHint" fieldName="contactNameAndLastname" />
          <div class="py-2"></div>
          <CoachlyTextFormField v-model="formData.email" placeholder="contactEmailHint" fieldName="contactEmail" @blur="validateField('email')" />
          <div class="py-2"></div>
          <CoachlyTextFormField v-model="formData.message" placeholder="contactMessageHint" fieldName="contactMessage" multiline :rows="5" @blur="validateField('message')" />
          <div class="py-4"></div>
          <button class="primary-button" style="width: 100% !important" type="submit">
            <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ $t("contactSendButton") }}
          </button>
        </form>
      </div>
    </div>

    <!-- FOOTER Widget -->
    <div class="py-8"></div>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import CoachlyTextFormField from "../components/form-field/TextFormField.vue";
import Vue from "vue";
import VueI18n from "vue-i18n";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import axios from "axios";

import translationFR from "../lang/fr-FR";
import translationEN from "../lang/en-US";

Vue.use(VueI18n);

const messages = {
  fr: translationFR,
  en: translationEN,
};

const i18n = new VueI18n({
  locale: "fr", // set locale
  messages, // set locale messages
});

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      fieldErrors: {
        name: false,
        email: false,
        message: false,
      },
      isLoading: false,
    };
  },
  methods: {
    validateField(field: any) {
      if (!(this.formData as any)[field].trim()) {
        (this.fieldErrors as any)[field] = true;
        return false;
      } else {
        (this.fieldErrors as any)[field] = false;
        return true;
      }
    },
    validateForm() {
      const fields = ["name", "email", "message"];
      const isValid = fields.every((field) => this.validateField(field));
      return isValid;
    },
    async handleSubmit() {
      if (this.isLoading) return;
      this.isLoading = true;
      if (this.validateForm()) {
        await this.sendMessage();
      } else {
        this.$toast.error(this.$t("contactEmptyData"));
      }
      this.isLoading = false;
    },
    async sendMessage() {
      try {
        // TODO change to prod email
        // "https://us-central1-coachly-sport.cloudfunctions.net/contactEmail";
        const url = "https://us-central1-coachly-dev.cloudfunctions.net/contactEmail";

        const response = await axios.post(url, {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
        });

        if (response.data.statusCode != 200) {
          throw new Error("Error while sending email");
        }

        this.$toast.success(this.$t("contactSuccess"));
        this.formData.name = "";
        this.formData.email = "";
        this.formData.message = "";
      } catch (e: any) {
        this.$toast.error(this.$t("contactErrorOccured"));
        console.error(e);
      }
    },
  },
  components: {
    NavBar,
    Footer,
    CoachlyTextFormField,
  },
  i18n,
});
</script>
