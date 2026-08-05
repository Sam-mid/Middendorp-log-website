<script setup>
import Button from "./Button.vue";
import HeroNotch from "./HeroNotch.vue";

defineProps({
  title: { type: String, required: true },
  background: { type: String, required: true },
  showContactButton: { type: Boolean, default: false }
});

const emit = defineEmits(["scroll-to"]);
</script>

<template>
  <div class="hero relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
    <img
        :src="background"
        alt="header"
        class="w-full h-full object-cover brightness-[0.6] z-0"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>

    <!-- Titel: gecentreerd in de ruimte bóven de inham -->
    <div
        class="hero-content absolute inset-0 flex flex-col gap-8 justify-center items-center sm:items-start text-center sm:text-left px-4 sm:px-8 lg:px-16 z-10"
    >
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold max-w-2xl">
        {{ title }}
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

    <!-- De inham; positioneert zichzelf tegen de rechterkant van de hero -->
    <HeroNotch class="z-20" />

    <!-- De knop staat links naast de inham, op dezelfde hoogte -->
    <div
        class="hero-cta absolute bottom-0 left-0 z-20 hidden sm:flex items-center pl-8 lg:pl-16"
    >
      <Button
          v-if="showContactButton"
          label="Neem contact op"
          variant="primary"
          size="lg"
          @click="emit('scroll-to', 'footer')"
      />
    </div>

    <!-- Rechts loopt de groene baan van de pagina door; de foto valt er
         bovenop en laat hem op de hoogte van de inham weer vrij. -->
    <div
        class="hero-edge absolute bottom-0 right-0 z-20 hidden sm:block w-[220px] bg-middendorp_green"
    ></div>
  </div>
</template>

<style scoped>
/* Hoogte van de inham; HeroNotch erft deze waarde.
   Op mobiel 0, want daar staat de inham uit. */
.hero {
  --notch-height: 0px;
}

@media (min-width: 640px) {
  .hero {
    --notch-height: 110px;
  }
}

@media (min-width: 1024px) {
  .hero {
    --notch-height: 145px;
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
