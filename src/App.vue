<script setup>
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Footer from "./components/Footer.vue";
import Partners from "./components/Partners.vue";
import InfoCard from "./components/InfoCard.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow">
      <About />
      <InfoCard/>
      <Partners/>
    </div>
    <Footer/>
  </div>
</template>


<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
}
</style>
