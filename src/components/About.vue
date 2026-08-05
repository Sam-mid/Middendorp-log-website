<script setup>
import Carousel from "./Carousel.vue"
</script>

<template>
  <!-- Geen overflow-hidden: de carousel steekt boven de sectie uit, tot in de
       inham van de hero. -->
  <div class="relative">

    <!-- Achtergrond stopt voor de groene baan rechts, zoals in het design.
         De carousel loopt er wel overheen. -->
    <div class="absolute inset-y-0 left-0 right-0 sm:right-[220px] bg-middendorp_white"></div>

    <!-- z-30 zodat de carousel over de inham en de groene baan van de hero
         heen valt; die staan op z-20. -->
    <div class="relative z-30 flex flex-col max-w-[1600px] mx-auto lg:flex-row justify-between items-start lg:items-stretch px-4 sm:px-8 lg:px-16 py-20 gap-12">

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

      <div class="relative w-full lg:w-[45%] xl:w-[50%] mt-12 lg:-mt-[164px] z-10 animate-fade-in-right">
        <Carousel class="lg:absolute lg:inset-0" />
      </div>
    </div>
  </div>
</template>
