<template>
  <div class="coachly-form-field w-full">
    <h5 class="coachly-form-input-title">
      {{ $t(fieldName) }}
    </h5>
    <input v-if=!multiline type="text" :placeholder="translatedPlaceholder" v-model="inputValue" @input="$emit('input', inputValue)" class="coachly-form-input"/>
    <textarea v-else :rows="rows" :placeholder="translatedPlaceholder" v-model="inputValue" @input="$emit('input', inputValue)" class="coachly-form-input"></textarea>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    fieldName: {
      type: String,
      default: "",
    },
    multiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 3
    },
  },
  computed: {
    translatedPlaceholder(this: Vue & { placeholder: string }): string {
      return this.$t(this.placeholder).toString();
    },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  name: "CoachlyTextFormField",
};
</script>
