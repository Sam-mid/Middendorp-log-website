<script setup>
import Carousel from "./Carousel.vue"
</script>

<template>
  <div class="bg-middendorp_white relative overflow-hidden">

    <div class="relative z-0 flex flex-col max-w-[1600px] mx-auto lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 py-20 gap-12">

      <!-- Tekstblok -->
      <div class="flex-1 max-w-xl z-10 animate-fade-in-left">
        <h1 class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-6 leading-tight tracking-tight">Wie zijn wij?</h1>
        <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-8"></div>
        <p class="text-lg leading-relaxed text-gray-700 space-y-4">
          <span class="block">Wij zijn al meer dan 50 jaar vertrouwd in transport.</span>

          <span class="block">Bij Middendorp Logistiek staan betrouwbaarheid, nauwkeurigheid en zorg centraal.
          Al generaties lang vervoeren wij goederen met de grootste zorg alsof het onze eigen materialen zijn.
          Met een ervaren team en persoonlijke service zorgen we ervoor dat alles op tijd, correct en veilig op de plaats van bestemming komt.</span>
        </p>
      </div>

      <!-- Carousel i.p.v. losse afbeeldingen -->
      <div class="relative w-full lg:w-[600px] mt-12 lg:mt-0 z-10 animate-fade-in-right">
        <Carousel />
      </div>
    </div>
  </div>
</template>
