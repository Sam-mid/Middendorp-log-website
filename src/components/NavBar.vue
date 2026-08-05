<script setup>
import { ref } from "vue";
import logoUrl from "/src/assets/img/middendorp_logo.svg";
import { useRoute, useRouter } from "vue-router";

const isOpen = ref(false);
const emit = defineEmits(["scroll-to"]);

const route = useRoute();
const router = useRouter();

// Slim scroll/navigate functie
const goToSection = (id) => {
  isOpen.value = false;
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
  <div>
    <!-- Navbar -->
    <div class="flex justify-between items-center border-b-2 border-middendorp_green pl-4 sm:pl-8 shadow-sm bg-white">

      <RouterLink to="/" class="py-4 shrink-0">
        <img
            :src="logoUrl"
            alt="Middendorp Logistiek"
            class="w-32 sm:w-32 md:w-40 cursor-pointer hover:opacity-80 transition-opacity duration-200"
        />
      </RouterLink>

      <!-- Hamburger button (mobiel) -->
      <button
          @click="isOpen = !isOpen"
          class="lg:hidden flex flex-col gap-1.5 p-2 mr-4 transition-all"
      >
        <span class="w-6 h-0.5 bg-middendorp_darkgreen transition-all duration-300" :class="{ 'rotate-45 translate-y-2': isOpen }"></span>
        <span class="w-6 h-0.5 bg-middendorp_darkgreen transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
        <span class="w-6 h-0.5 bg-middendorp_darkgreen transition-all duration-300" :class="{ '-rotate-45 -translate-y-2': isOpen }"></span>
      </button>

      <!-- Nav links desktop -->
      <nav class="hidden lg:flex flex-row items-stretch self-stretch gap-6 xl:gap-8 text-base xl:text-lg font-medium">
        <button @click="goToSection('about')" class="text-middendorp_black hover:text-middendorp_green transition-colors duration-200 relative group">
          Over ons
          <span class="absolute bottom-4 left-0 w-0 h-0.5 bg-middendorp_green transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button @click="goToSection('info')" class="text-middendorp_black hover:text-middendorp_green transition-colors duration-200 relative group">
          Diensten
          <span class="absolute bottom-4 left-0 w-0 h-0.5 bg-middendorp_green transition-all duration-300 group-hover:w-full"></span>
        </button>
        <button @click="goToSection('partners')" class="text-middendorp_black hover:text-middendorp_green transition-colors duration-200 relative group">
          Partners
          <span class="absolute bottom-4 left-0 w-0 h-0.5 bg-middendorp_green transition-all duration-300 group-hover:w-full"></span>
        </button>
        <RouterLink to="/vacatures" class="text-middendorp_black hover:text-middendorp_green transition-colors duration-200 relative group flex items-center">
          Vacatures
          <span class="absolute bottom-4 left-0 w-0 h-0.5 bg-middendorp_green transition-all duration-300 group-hover:w-full"></span>
        </RouterLink>
        <button @click="goToSection('footer')" class="text-middendorp_black hover:text-middendorp_green transition-colors duration-200 relative group">
          Contact
          <span class="absolute bottom-4 left-0 w-0 h-0.5 bg-middendorp_green transition-all duration-300 group-hover:w-full"></span>
        </button>

        <!-- Telefoonnummer in het groene blok rechtsboven -->
        <a
            href="tel:0715801918"
            class="bg-middendorp_green text-white px-6 xl:px-10 flex items-center gap-2 font-semibold whitespace-nowrap transition-colors duration-200 hover:bg-middendorp_darkgreen"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
            <path d="M22.9167 17.625V20.75C22.9179 21.0401 22.8584 21.3272 22.7422 21.5931C22.626 21.8589 22.4555 22.0975 22.2418 22.2936C22.028 22.4897 21.7756 22.639 21.5008 22.732C21.226 22.8249 20.9348 22.8594 20.6458 22.8333C17.4405 22.485 14.3615 21.3897 11.6563 19.6354C9.13942 18.0361 7.00557 15.9023 5.40626 13.3854C3.64582 10.6679 2.55026 7.57394 2.20835 4.35416C2.18231 4.0661 2.21655 3.77578 2.30887 3.50168C2.40118 3.22758 2.54956 2.97571 2.74456 2.76209C2.93955 2.54848 3.17689 2.37781 3.44146 2.26095C3.70603 2.14409 3.99203 2.08359 4.28126 2.08332H7.40626C7.91179 2.07835 8.40188 2.25736 8.78518 2.587C9.16848 2.91664 9.41884 3.37441 9.48959 3.87499C9.62149 4.87506 9.86611 5.857 10.2188 6.80207C10.3589 7.17491 10.3892 7.58011 10.3062 7.96966C10.2231 8.3592 10.0301 8.71677 9.75001 8.99999L8.4271 10.3229C9.90997 12.9308 12.0692 15.09 14.6771 16.5729L16 15.25C16.2832 14.9699 16.6408 14.7769 17.0303 14.6938C17.4199 14.6108 17.8251 14.6411 18.1979 14.7812C19.143 15.1339 20.1249 15.3785 21.125 15.5104C21.631 15.5818 22.0931 15.8367 22.4235 16.2265C22.7538 16.6164 22.9294 17.1141 22.9167 17.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          071-5801918
        </a>
      </nav>

    </div>

    <!-- Mobiel menu -->
    <transition name="slide-fade">
      <nav
          v-if="isOpen"
          class="lg:hidden flex flex-col gap-3 bg-gradient-to-b from-middendorp_white to-white border-b-2 border-middendorp_green px-6 py-5 text-base font-medium shadow-lg"
      >
        <button @click="goToSection('about')" class="text-middendorp_black hover:text-middendorp_green transition-all py-2 hover:pl-2">Over ons</button>
        <button @click="goToSection('info')" class="text-middendorp_black hover:text-middendorp_green transition-all py-2 hover:pl-2">Diensten</button>
        <button @click="goToSection('partners')" class="text-middendorp_black hover:text-middendorp_green transition-all py-2 hover:pl-2">Partners</button>
        <RouterLink to="/vacatures" class="text-middendorp_black hover:text-middendorp_green transition-all text-center py-2 hover:pl-2">Vacatures</RouterLink>
        <button @click="goToSection('footer')" class="text-middendorp_black hover:text-middendorp_green transition-all py-2 hover:pl-2">Contact</button>

        <!-- Telefoonnummer als klikbare link -->
        <a
            href="tel:070123456789"
            class="text-white bg-middendorp_green px-4 py-3 flex items-center justify-center gap-2 font-semibold hover:bg-middendorp_darkgreen transition-all mt-2 shadow-md"
        >
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9167 17.625V20.75C22.9179 21.0401 22.8584 21.3272 22.7422 21.5931C22.626 21.8589 22.4555 22.0975 22.2418 22.2936C22.028 22.4897 21.7756 22.639 21.5008 22.732C21.226 22.8249 20.9348 22.8594 20.6458 22.8333C17.4405 22.485 14.3615 21.3897 11.6563 19.6354C9.13942 18.0361 7.00557 15.9023 5.40626 13.3854C3.64582 10.6679 2.55026 7.57394 2.20835 4.35416C2.18231 4.0661 2.21655 3.77578 2.30887 3.50168C2.40118 3.22758 2.54956 2.97571 2.74456 2.76209C2.93955 2.54848 3.17689 2.37781 3.44146 2.26095C3.70603 2.14409 3.99203 2.08359 4.28126 2.08332H7.40626C7.91179 2.07835 8.40188 2.25736 8.78518 2.587C9.16848 2.91664 9.41884 3.37441 9.48959 3.87499C9.62149 4.87506 9.86611 5.857 10.2188 6.80207C10.3589 7.17491 10.3892 7.58011 10.3062 7.96966C10.2231 8.3592 10.0301 8.71677 9.75001 8.99999L8.4271 10.3229C9.90997 12.9308 12.0692 15.09 14.6771 16.5729L16 15.25C16.2832 14.9699 16.6408 14.7769 17.0303 14.6938C17.4199 14.6108 17.8251 14.6411 18.1979 14.7812C19.143 15.1339 20.1249 15.3785 21.125 15.5104C21.631 15.5818 22.0931 15.8367 22.4235 16.2265C22.7538 16.6164 22.9294 17.1141 22.9167 17.625Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          070-123456789
        </a>
      </nav>
    </transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
