<script setup>
import Carousel from "./Carousel.vue"
</script>

<template>
  <!-- Geen overflow-hidden: de carousel steekt boven de sectie uit, tot in de
       inham van de hero. -->
  <div class="relative">

    <!-- Achtergrond stopt voor de groene baan rechts, zoals in het design.
         De carousel loopt er wel overheen. -->
    <div class="absolute inset-y-0 left-0 right-[var(--band-width)] bg-middendorp_white"></div>

    <!-- z-30 zodat de carousel over de inham en de groene baan van de hero
         heen valt; die staan op z-20. -->
    <div class="relative z-30 flex flex-col max-w-[1600px] mx-auto lg:flex-row justify-between items-start lg:items-stretch px-4 sm:px-8 lg:px-16 py-20 gap-12">

      <!-- Tekstblok -->
      <div class="flex-1 max-w-2xl z-10 animate-fade-in-left">
        <h1 class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-6 leading-tight tracking-tight">Wie zijn wij?</h1>
        <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-8"></div>

        <!-- Introzin als tussenstap tussen de kop en de lopende tekst -->
        <p class="text-xl lg:text-2xl leading-snug font-medium text-middendorp_darkgreen mb-6">
          Wij zijn al meer dan 50 jaar vertrouwd in transport.
        </p>

        <p class="text-lg leading-relaxed text-middendorp_black">
          Bij Middendorp Logistiek staan
          <strong class="font-semibold text-middendorp_darkgreen">betrouwbaarheid, nauwkeurigheid en zorg</strong>
          centraal. Al generaties lang vervoeren wij goederen met de grootste zorg alsof het onze eigen materialen zijn.
          Met een ervaren team en persoonlijke service zorgen we ervoor dat alles
          <strong class="font-semibold text-middendorp_darkgreen">op tijd, correct en veilig</strong>
          op de plaats van bestemming komt.
        </p>
      </div>

      <div class="relative w-full lg:w-[45%] xl:w-[50%] mt-12 lg:-mt-[164px] z-10 animate-fade-in-right">
        <Carousel class="lg:absolute lg:inset-0" />
      </div>
    </div>
  </div>
</template>
