<script setup>
import { ref } from "vue";
import logoUrl from "/src/assets/img/middendorp_logo.svg";
import Button from "./Button.vue";

const isOpen = ref(false);
</script>

<template>
  <header>
    <!-- Navbar -->
    <div class="flex justify-between items-center bg-gray-100 border-b border-gray-300 px-4 py-3">
      <!-- Logo -->
      <img
          :src="logoUrl"
          alt="Middendorp Logistiek"
          class="w-24 sm:w-32 md:w-36"
      />

      <!-- Hamburger button (alleen mobiel) -->
      <button
          @click="isOpen = !isOpen"
          class="sm:hidden flex flex-col gap-1 p-2 focus:outline-none"
       label="">
        <span class="w-6 h-0.5 bg-gray-700"></span>
        <span class="w-6 h-0.5 bg-gray-700"></span>
        <span class="w-6 h-0.5 bg-gray-700"></span>
      </button>

      <!-- Nav links desktop -->
      <nav
          class="hidden sm:flex flex-row gap-6 text-base md:text-lg font-medium"
      >
        <a href="/" class="text-[#34495e] hover:text-middendorp_green">Home</a>
        <a href="/over" class="text-middendorp_black hover:text-middendorp_green">Over ons</a>
        <a href="/diensten" class="text-middendorp_black hover:text-middendorp_green">Diensten</a>
        <a href="/contact" class="text-middendorp_black hover:text-middendorp_green">Contact</a>
        <p class="text-white bg-middendorp_green px-3 py-1 rounded">070-123456789</p>
      </nav>
    </div>

    <!-- Mobiel menu -->
    <transition name="fade">
      <nav
          v-if="isOpen"
          class="sm:hidden flex flex-col gap-4 bg-gray-100 border-t border-gray-300 px-6 py-4 text-lg font-medium"
      >
        <a href="/" class="text-[#34495e] hover:text-middendorp_green">Home</a>
        <a href="/over" class="text-middendorp_black hover:text-middendorp_green">Over ons</a>
        <a href="/diensten" class="text-middendorp_black hover:text-middendorp_green">Diensten</a>
        <a href="/contact" class="text-middendorp_black hover:text-middendorp_green">Contact</a>
        <p class="text-white bg-middendorp_green px-3 py-1 rounded w-max">070-123456789</p>
      </nav>
    </transition>

    <!-- Hero / Header -->
    <div class="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      <!-- Achtergrondafbeelding -->
      <img
          src="/src/assets/img/header-background.jpeg"
          alt="header"
          class="w-full h-full object-cover brightness-[0.6] z-0"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>

      <!-- Content block (tekst + knop) -->
      <div
          class="absolute inset-0 flex flex-col gap-8 justify-center items-center sm:items-start text-center sm:text-left px-6 z-10 lg:left-40"
      >
        <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Transport en <br />
          koeriers diensten
        </h1>
        <Button label="Neem contact op" variant="primary" size="lg" href="#footer" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


