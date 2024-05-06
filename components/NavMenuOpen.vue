<template>
    <!-- TODO when we got responsive header designed... -->
  <div class="relative">
    <!-- Bouton hamburger -->
    <button @click="toggleMenu" class="md:hidden">
      <!-- Condition Vue.js pour changer l'icône -->
      <svg v-if="!isOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menu déroulant -->
    <div v-if="isOpen" class="nav-menu-transition absolute left-0 bg-red shadow-md flex flex-col w-100 h-64">
      <a href="#" class="p-2 hover:bg-gray-100">Link 1</a>
      <a href="#" class="p-2 hover:bg-gray-100">Link 2</a>
      <a href="#" class="p-2 hover:bg-gray-100">Link 3</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
