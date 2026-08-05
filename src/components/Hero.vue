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
        class="hero-content absolute inset-0 flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-4 sm:px-8 lg:px-16 z-10"
    >
      <h1 class="text-white text-3xl sm:text-5xl md:text-6xl font-bold max-w-2xl">
        {{ title }}
      </h1>
    </div>

    <!-- De inham linksonder, met daarin de call-to-action -->
    <HeroNotch class="absolute bottom-0 left-0 z-20">
      <Button
          v-if="showContactButton"
          label="Neem contact op"
          variant="primary"
          size="lg"
          @click="emit('scroll-to', 'footer')"
      />
    </HeroNotch>
  </div>
</template>

<style scoped>
/* Hoogte van de inham; HeroNotch erft deze waarde. */
.hero {
  --notch-height: 84px;
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
</style>
