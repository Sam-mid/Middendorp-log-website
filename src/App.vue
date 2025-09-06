<script setup>
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
import Partners from "./components/Partners.vue";
import InfoCard from "./components/InfoCard.vue";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header @scroll-to="scrollTo" />

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
</style>

