<script setup>
/**
 * De "inham" uit het Figma-design.
 *
 * Een vlak in de paginakleur (#EFF1F3) dat linksonder in de hero snijdt en
 * overloopt in de sectie eronder. In de inham staat de call-to-action (slot).
 *
 * De rechterrand loopt schuin naar binnen naar beneden toe, zodat de
 * hero-foto er schuin overheen valt — zoals in het design.
 *
 * De hoek komt exact uit de Figma-export src/assets/img/Vector.svg:
 * 51,81px horizontaal op 145px hoogte → verhouding 0,3573.
 * Daardoor blijft de hoek gelijk, ook als de hoogte per breakpoint wijzigt.
 *
 * De hoogte komt van --notch-height, die de Hero op zijn root zet, zodat de
 * hero-tekst dezelfde hoogte kan gebruiken om vrij te blijven van de inham.
 */
</script>

<template>
  <div class="notch bg-middendorp_white flex items-center pl-4 sm:pl-8 lg:pl-16">
    <slot />
  </div>
</template>

<style scoped>
.notch {
  --notch-slant: calc(var(--notch-height, 145px) * 0.3573);

  height: var(--notch-height, 145px);
  /* Breedte bovenaan; de schuine rand loopt naar binnen richting de onderkant,
     zodat de foto schuin over de inham heen valt. */
  width: 85%;
  clip-path: polygon(0 0, 100% 0, calc(100% - var(--notch-slant)) 100%, 0 100%);
}

@media (min-width: 640px) {
  .notch {
    width: 58%;
  }
}

@media (min-width: 1024px) {
  .notch {
    width: 45%;
  }
}
</style>
