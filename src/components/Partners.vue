<script setup>
const partners = [
  { src: "/public/partners/allinq.svg", alt: "allinq" },
  { src: "/public/partners/KPN.svg", alt: "KPN" },
  { src: "/public/partners/paul.svg", alt: "paul" },
  { src: "/public/partners/postnl.svg", alt: "postnl" },
  { src: "/public/partners/ceva.svg", alt: "ceva" },
  { src: "/public/partners/van-de-ende.svg", alt: "van-de-ende" },
  { src: "/public/partners/drake.svg", alt: "drake" },
  { src: "/public/partners/elslogistics.svg", alt: "elslogistics" },
  { src: "/public/partners/flextrans.svg", alt: "flextrans" },
  { src: "/public/partners/groven.svg", alt: "groven" },
  { src: "/public/partners/paragon.svg", alt: "paragon" },
  { src: "/public/partners/svz.svg", alt: "svz" },
  { src: "/public/partners/master-protection.svg", alt: "master-protection" }
];
</script>

<template>
  <div class="relative z-0  max-w-[1600px] mx-auto lg:flex-row justify-between items-center px-10 py-20">
    <h1 class="text-middendorp_darkgreen font-bold text-5xl mb-32">Klanten en partners</h1>
  <div class="bg-white py-6 overflow-hidden">
    <div class="scroll-track">
      <!-- Rij 1 -->
      <div class="scroll-content">
        <div v-for="(partner, index) in partners" :key="'first-' + index" class="logo">
          <img :src="partner.src" :alt="partner.alt" class="h-16 w-auto object-contain" />
        </div>
      </div>
      <!-- Rij 2 (duplicaat) -->
      <div class="scroll-content">
        <div v-for="(partner, index) in partners" :key="'second-' + index" class="logo">
          <img :src="partner.src" :alt="partner.alt" class="h-16 w-auto object-contain" />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.scroll-track {
  display: flex;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.scroll-content {
  display: flex;
}

.logo {
  flex: 0 0 auto;
  padding: 0 2rem; /* ruimte tussen logo's */
}

/* Scroll animatie */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-20%);
  }
}
</style>
