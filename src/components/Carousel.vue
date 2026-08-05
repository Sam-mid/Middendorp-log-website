<script setup>
import { ref, onMounted, onUnmounted } from "vue"

// Importeer de afbeeldingen
import foto1 from "@/assets/img/carousel/foto1.jpg";
import foto2 from "@/assets/img/carousel/foto2.jpg";
import foto3 from "@/assets/img/carousel/foto3.jpg";
import foto4 from "@/assets/img/carousel/foto4.jpg"


// Zet de geïmporteerde afbeeldingen in de array
const images = [foto4, foto2, foto3];

const currentIndex = ref(0);
const total = images.length;

// Automatisch volgende slide
let intervalId;
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % total;
};

onMounted(() => {
  intervalId = setInterval(next, 4000); // elke 4 seconden
});

onUnmounted(() => {
  clearInterval(intervalId);
});

// Swipe support (mobiel)
let startX = 0;
const onTouchStart = (e) => {
  startX = e.touches[0].clientX;
};
const onTouchEnd = (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) next();
  if (endX - startX > 50) {
    currentIndex.value = (currentIndex.value - 1 + total) % total;
  }
};
</script>

<template>
  <div class="relative w-full h-full max-w-[1600px] mx-auto overflow-hidden shadow-lg">
    <!-- Slides. Vanaf lg vullen ze de hoogte van het vak eromheen; daaronder
         houden ze een vaste beeldhoogte aan. -->
    <div
        class="flex h-full transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
      <div
          v-for="(img, i) in images"
          :key="i"
          class="w-full h-full flex-shrink-0"
      >
        <img
            :src="img"
            alt="carousel image"
            class="w-full h-64 sm:h-96 lg:h-full object-cover"
        />
      </div>
    </div>

    <!-- Indicators -->
    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      <span
          v-for="(img, i) in images"
          :key="i"
          class="w-3 h-3 rounded-full"
          :class="i === currentIndex ? 'bg-white' : 'bg-white/50'"
      ></span>
    </div>
  </div>
</template>

