<script setup>
// Importeer de afbeeldingen eerst
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

// Gebruik de geïmporteerde afbeeldingen
const partners = [
  { src: allinq, alt: "allinq" },
  { src: kpn, alt: "KPN" },
  { src: paul, alt: "paul" },
  { src: postnl, alt: "postnl" },
  { src: ceva, alt: "ceva" },
  { src: vandeende, alt: "van-de-ende" },
  { src: drake, alt: "drake" },
  { src: elslogistics, alt: "elslogistics" },
  { src: flextrans, alt: "flextrans" },
  { src: groven, alt: "groven" },
  { src: paragon, alt: "paragon" },
  { src: svz, alt: "svz" },
  { src: masterProtection, alt: "master-protection" }
];
</script>

<template>
  <div class="relative z-0 max-w-[1600px] mx-auto lg:flex-row justify-between items-center px-10 py-20">
    <h1 class="text-middendorp_darkgreen font-bold text-3xl lg:text-5xl mb-32">
      Klanten en partners
    </h1>
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
