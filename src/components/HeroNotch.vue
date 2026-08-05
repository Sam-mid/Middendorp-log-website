<script setup>
/**
 * De "inham" uit het Figma-design.
 *
 * De vector uit Figma (Vector.svg) is 915px breed in een frame van 1600px en
 * staat vast aan de RECHTERKANT van de hero. Zijn linkerrand loopt schuin:
 * 51,81px over 145px hoogte (verhouding 0,3573), en helt naar links naar
 * beneden toe. Het grijs van de inham is wat links van die schuine rand
 * overblijft; daar staat de call-to-action in (slot).
 *
 * Daarom is dit element vanaf rechts gepositioneerd (right), niet met een
 * eigen breedte vanaf links. Zo blijft de schuine rand op elke schermbreedte
 * op dezelfde plek zitten als in het design.
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
  left: 0;
  bottom: 0;
  height: var(--notch-height, 145px);

  /* 915 / 1600 = 57,19% vanaf rechts. Op smallere schermen houden we minimaal
     22rem over, anders past de knop niet meer in de inham. */
  right: min(57.19%, calc(100% - 22rem));
  /* Ruimte voor de schuine rand, die bovenaan verder naar rechts loopt. */
  margin-right: calc(-1 * var(--notch-slant));

  clip-path: polygon(0 0, 100% 0, calc(100% - var(--notch-slant)) 100%, 0 100%);
}
</style>
