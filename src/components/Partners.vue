<script setup>
import allinq from "@/assets/img/partners/allinq.svg";
import kpn from "@/assets/img/partners/KPN.svg";
import paul from "@/assets/img/partners/paul.svg";
import postnl from "@/assets/img/partners/postnl.svg";
import ceva from "@/assets/img/partners/ceva.svg";
import vandeende from "@/assets/img/partners/van-de-ende.svg";
import drake from "@/assets/img/partners/drake.svg";
import elslogistics from "@/assets/img/partners/elslogistics.svg";
import flextrans from "@/assets/img/partners/flextrans.svg";
import groven from "@/assets/img/partners/groven.svg";
import paragon from "@/assets/img/partners/paragon.svg";
import svz from "@/assets/img/partners/svz.svg";
import masterProtection from "@/assets/img/partners/master-protection.svg";

// partners
const partners = [
  allinq, kpn, paul, postnl, ceva, vandeende,
  drake, elslogistics, flextrans, groven, paragon, svz, masterProtection
];

// Splits partners in twee rijen
const row1 = partners.filter((_, i) => i % 2 === 0);
const row2 = partners.filter((_, i) => i % 2 !== 0);
</script>

<template>
  <div class="relative z-0 py-20">

    <!-- Kop blijft in de paginacontainer staan -->
    <div class="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
      <h1 class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-6">
        Klanten en partners
      </h1>
      <div class="h-1 w-20 bg-gradient-to-r from-middendorp_green to-middendorp_darkgreen mb-8 sm:mb-16"></div>
    </div>

    <!-- De rijen lopen over de volle schermbreedte door, tot onder de groene baan rechts. -->
    <div class="py-6 overflow-hidden space-y-8 sm:space-y-12">

      <!-- Eerste rij -->
      <div class="scroll-track">
        <div class="scroll-content">
          <div v-for="(partner, index) in row1" :key="'row1a-' + index" class="logo">
            <img :src="partner" alt="partner logo" loading="lazy" decoding="async" class="h-10 sm:h-16 w-auto object-contain" />
          </div>
          <!-- Duplicaat voor oneindig scrollen -->
          <div v-for="(partner, index) in row1" :key="'row1b-' + index" class="logo">
            <img :src="partner" alt="partner logo" loading="lazy" decoding="async" class="h-10 sm:h-16 w-auto object-contain" />
          </div>
        </div>
      </div>

      <!-- Tweede rij -->
      <div class="scroll-track reverse">
        <div class="scroll-content">
          <div v-for="(partner, index) in row2" :key="'row2a-' + index" class="logo">
            <img :src="partner" alt="partner logo" loading="lazy" decoding="async" class="h-10 sm:h-16 w-auto object-contain" />
          </div>
          <!-- infinite scroll -->
          <div v-for="(partner, index) in row2" :key="'row2b-' + index" class="logo">
            <img :src="partner" alt="partner logo" loading="lazy" decoding="async" class="h-10 sm:h-16 w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
    <div
        class="absolute inset-y-0 right-0 z-20 w-[var(--band-width)] bg-middendorp_green pointer-events-none"
    ></div>
  </div>
</template>

<style scoped>
.scroll-track {
  display: flex;
  width: max-content;
  animation: scroll 60s linear infinite;
}

.scroll-track.reverse {
  animation-direction: reverse;
}

.scroll-content {
  display: flex;
}

.logo {
  flex: 0 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .logo {
    padding: 0 2rem;
  }
}

/* Scroll animatie */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%); /* 50% omdat we de rij dupliceren voor oneindig scrollen */
  }
}
</style>


