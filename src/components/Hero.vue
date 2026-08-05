<script setup>
import { computed } from "vue";
import Button from "./Button.vue";
import HeroNotch from "./HeroNotch.vue";

const props = defineProps({
  // Een <br> in de titel bepaalt waar de regel breekt. Verdere HTML wordt
  // gewoon als tekst getoond; zo hoeft hier geen v-html te staan.
  title: { type: String, required: true },
  background: { type: String, required: true },
  showContactButton: { type: Boolean, default: false }
});

const titelRegels = computed(() =>
    props.title.split(/<br\s*\/?>/i).map((regel) => regel.trim())
);

const emit = defineEmits(["scroll-to"]);
</script>

<template>
  <div class="hero relative w-full overflow-hidden">
    <img
        :src="background"
        alt="header"
        fetchpriority="high"
        class="w-full h-full object-cover brightness-[0.6] z-0"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>

    <!-- Titel: gecentreerd in de ruimte bóven de inham -->
    <div class="hero-content absolute inset-0 flex flex-col justify-center z-10">
      <div class="hero-container flex flex-col gap-8 items-start text-left">
        <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold max-w-2xl">
          <template v-for="(regel, i) in titelRegels" :key="i">
            <br v-if="i > 0" />{{ regel }}
          </template>
        </h1>

        <!-- Op mobiel is er geen inham, dus staat de knop onder de titel. -->
        <Button
            v-if="showContactButton"
            class="sm:hidden"
            label="Neem contact op"
            variant="primary"
            size="lg"
            @click="emit('scroll-to', 'footer')"
        />
      </div>
    </div>

    <!-- De inham; positioneert zichzelf tegen de rechterkant van de hero -->
    <HeroNotch class="z-20" />

    <!-- De knop staat links naast de inham, op dezelfde hoogte en in dezelfde
         container als de titel en de secties eronder -->
    <div
        class="hero-cta absolute bottom-0 left-0 right-0 z-20 hidden sm:flex items-center pointer-events-none"
    >
      <div class="hero-container">
        <Button
            v-if="showContactButton"
            class="pointer-events-auto"
            label="Neem contact op"
            variant="primary"
            size="xl"
            @click="emit('scroll-to', 'footer')"
        />
      </div>
    </div>

    <!-- Rechts loopt de groene baan van de pagina door; de foto valt er
         bovenop en laat hem op de hoogte van de inham weer vrij. -->
    <div
        class="hero-edge absolute bottom-0 right-0 z-20 hidden sm:block w-[var(--band-width)] bg-middendorp_green"
    ></div>
  </div>
</template>

<style scoped>
/* Hoogte van de hero en van de inham. --notch-height wordt geërfd door
   HeroNotch en door de titel en de knop hieronder.
   Op mobiel is de inham 0, want daar staat hij uit. */
.hero {
  --notch-height: 0px;
  height: 40vh;
}

@media (min-width: 640px) {
  .hero {
    --notch-height: 110px;
    height: 60vh;
  }
}

@media (min-width: 768px) {
  .hero {
    height: 70vh;
  }
}

@media (min-width: 1024px) {
  .hero {
    --notch-height: 145px;
  }
}

/* Op grote schermen oogt 70vh te fors. Iets platter, met een plafond zodat
   hij op hoge schermen niet meegroeit en een bodem voor lage vensters. */
@media (min-width: 1080px) {
  .hero {
    height: 55vh;
    max-height: 620px;
    min-height: 400px;
  }
}

/* Dezelfde container als About, InfoCard en Partners, zodat de titel en de
   knop op elke schermbreedte uitlijnen met de secties eronder. */
.hero-container {
  width: 100%;
  max-width: 1600px;
  margin-inline: auto;
  padding-inline: 1rem;
}

@media (min-width: 640px) {
  .hero-container {
    padding-inline: 2rem;
  }
}

@media (min-width: 1024px) {
  .hero-container {
    padding-inline: 4rem;
  }
}

/* Houd de titel vrij van de inham. */
.hero-content {
  padding-bottom: var(--notch-height);
}

.hero-edge,
.hero-cta {
  height: var(--notch-height);
}
</style>
