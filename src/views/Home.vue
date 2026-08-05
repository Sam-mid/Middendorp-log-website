<script setup>
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Partners from "../components/Partners.vue";
import InfoCard from "../components/InfoCard.vue";

import headerBackground from "@/assets/img/header-background.jpeg";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <!-- Groene lijn langs de rechterkant (achtergrond) -->
<div class="fixed right-0 top-0 h-full w-[var(--band-width)] bg-middendorp_green -z-10"></div>

    <Header
        title="Transport en koeriers diensten"
        :background="headerBackground"
        @scroll-to="scrollTo"
        :showContactButton="true"
    />

    <div class="flex-grow">
      <section id="about"><About /></section>
      <section id="info"><InfoCard /></section>
      <section id="partners"><Partners /></section>
    </div>

    <section id="footer"><Footer /></section>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
  scroll-behavior: smooth;
}

/* Scroll animations */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

/* Mobile menu transitions */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
