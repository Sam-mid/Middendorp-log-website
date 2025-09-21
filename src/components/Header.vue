<script setup>
import { ref } from "vue";
import logoUrl from "/src/assets/img/middendorp_logo.svg";
import Button from "./Button.vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  title: { type: String, required: true },
  background: { type: String, required: true }
});

const isOpen = ref(false);
const emit = defineEmits(["scroll-to"]);

const route = useRoute();
const router = useRouter();

// Slim scroll/navigate functie
const goToSection = (id) => {
  if (route.path === "/") {
    // Je bent op de homepagina → scroll direct
    emit("scroll-to", id);
  } else {
    // Je bent NIET op homepagina → ga eerst naar home en scroll daarna
    router.push({ path: "/", hash: `#${id}` });
  }
};
</script>

<template>
  <header>
    <!-- Navbar -->
    <div class="flex justify-between items-center bg-gray-100 border-b border-gray-300 px-4 py-3">
      <!-- Logo -->
      <img
          :src="logoUrl"
          alt="Middendorp Logistiek"
          class="w-32 sm:w-32 md:w-36"
      />

      <!-- Hamburger button (mobiel) -->
      <button
          @click="isOpen = !isOpen"
          class="sm:hidden flex flex-col gap-1 p-2 focus:outline-none"
      >
        <span class="w-6 h-0.5 bg-gray-700"></span>
        <span class="w-6 h-0.5 bg-gray-700"></span>
        <span class="w-6 h-0.5 bg-gray-700"></span>
      </button>

      <!-- Nav links desktop -->
      <nav class="hidden sm:flex flex-row items-center gap-6 text-base md:text-lg font-medium">
        <button @click="goToSection('about')" class="text-middendorp_black hover:text-middendorp_green">Over ons</button>
        <button @click="goToSection('info')" class="text-middendorp_black hover:text-middendorp_green">Diensten</button>
        <button @click="goToSection('partners')" class="text-middendorp_black hover:text-middendorp_green">Partners</button>
        <RouterLink to="/vacatures" class="text-middendorp_black hover:text-middendorp_green">Vacatures</RouterLink>
        <button @click="goToSection('footer')" class="text-middendorp_black hover:text-middendorp_green">Contact</button>

        <!-- Telefoonnummer ook een link -->
        <a href="tel:070123456789" class="text-white bg-middendorp_green px-3 py-1 rounded">
          070-123456789
        </a>
      </nav>

    </div>

    <!-- Mobiel menu -->
    <transition name="fade">
      <nav
          v-if="isOpen"
          class="sm:hidden flex flex-col gap-4 bg-gray-100 border-t border-gray-300 px-6 py-4 text-lg font-medium"
      >
        <button @click="goToSection('about')" class="text-middendorp_black hover:text-middendorp_green">Over ons</button>
        <button @click="goToSection('info')" class="text-middendorp_black hover:text-middendorp_green">Diensten</button>
        <button @click="goToSection('partners')" class="text-middendorp_black hover:text-middendorp_green">Partners</button>
        <RouterLink to="/vacatures" class="text-middendorp_black hover:text-middendorp_green">Vacatures</RouterLink>
        <button @click="goToSection('footer')" class="text-middendorp_black hover:text-middendorp_green">Contact</button>

        <!-- Telefoonnummer als klikbare link -->
        <a
            href="tel:070123456789"
            class="text-white bg-middendorp_green px-3 py-1 rounded flex items-center justify-center"
        >
          070-123456789
        </a>
      </nav>

    </transition>

    <!-- Hero / Header -->
    <div class="relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
      <img
          :src="background"
          alt="header"
          class="w-full h-full object-cover brightness-[0.6] z-0"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>

      <!-- Content block -->
      <div
          class="absolute inset-0 flex flex-col gap-8 justify-center items-center sm:items-start text-center sm:text-left px-6 z-10 lg:left-40"
      >
        <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          {{ title }}
        </h1>
        <Button
            label="Neem contact op"
            variant="primary"
            size="lg"
            @click="goToSection('footer')"
        />
      </div>
    </div>
  </header>
</template>


