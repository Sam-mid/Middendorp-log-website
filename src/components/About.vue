<script setup>
import Carousel from "./Carousel.vue"
</script>

<template>
  <div class="bg-middendorp_white">
    <div class="relative z-0 flex flex-col max-w-[1600px] mx-auto lg:flex-row justify-between items-start px-10 py-20">

      <!-- Tekstblok -->
      <div class="flex-1 max-w-xl z-10">
        <h1 class="text-middendorp_darkgreen font-bold  text-3xl lg:text-5xl mb-4">Wie zijn wij?</h1>
        <br />
        <p class="text-lg leading-relaxed">
          Wij zijn al meer dan 50 jaar vertrouwd in transport. <br /><br />

          Bij Middendorp Logistiek staan betrouwbaarheid, nauwkeurigheid en zorg centraal.
          Al generaties lang vervoeren wij goederen met de grootste zorg alsof het onze eigen materialen zijn.
          Met een ervaren team en persoonlijke service zorgen we ervoor dat alles op tijd, correct en veilig op de plaats van bestemming komt.
        </p>
      </div>

      <!-- Carousel i.p.v. losse afbeeldingen -->
      <div class="relative w-full lg:w-[600px] mt-12 lg:mt-0 z-10">
        <Carousel />
      </div>
    </div>
  </div>
</template>
