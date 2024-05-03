<template>
  <div>
    <!-- When user tap on the logo, we must redirect him to the "/" page -->
    <router-link to="/">
      <img src="~/static/logo.png" alt="Coachly main logo" height="38px" />
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "CoachlyFullLogo",
};
</script>
