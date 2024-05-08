<template>
    <div v-html="formattedText"></div>
  </template>
  
  <script>
  export default {
    props: {
      text: String
    },
    computed: {
      formattedText() {
        return this.text.replace(/\n/g, '<br>');
      }
    }
  }
  </script>