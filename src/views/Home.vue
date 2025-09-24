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
  <div class="min-h-screen flex flex-col">
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
</style>
