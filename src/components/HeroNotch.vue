<script setup>
/**
 * De "inham" uit het Figma-design.
 *
 * De vector uit Figma (Vector.svg) is 915px breed in een frame van 1600px en
 * staat absoluut gepositioneerd tegen de RECHTERKANT van de hero. Zijn
 * linkerrand loopt schuin: 51,81px over 145px hoogte (verhouding 0,3573),
 * naar links toe naar beneden. De rechterrand is recht.
 *
 * De hoogte komt van --notch-height, die de Hero op zijn root zet, zodat de
 * hero-tekst dezelfde hoogte kan gebruiken om vrij te blijven van de inham.
 *
 * Op mobiel staat de inham uit: daar is te weinig breedte om de schuine rand
 * te laten werken. De Hero zet de knop dan onder de titel.
 */
</script>

<template>
  <div class="notch bg-middendorp_white hidden sm:flex items-center pl-8 lg:pl-16">
    <slot />
  </div>
</template>

<style scoped>
.notch {
  --notch-slant: calc(var(--notch-height, 145px) * 0.3573);

  position: absolute;
  right: 0;
  bottom: 0;
  height: var(--notch-height, 145px);

  /* De vector is 915px breed in een frame van 1600px = 57,19%. */
  width: 57.19%;

  /* Schuine rand links, rechterrand recht — precies de vector:
     linksboven op 51,81px, linksonder op 0. */
  clip-path: polygon(var(--notch-slant) 0, 0 100%, 100% 100%, 100% 0);
}
</style>
