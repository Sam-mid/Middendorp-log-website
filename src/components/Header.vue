<script setup>
import NavBar from "./NavBar.vue";
import Hero from "./Hero.vue";

defineProps({
  title: { type: String, required: true },
  background: { type: String, required: true },
  showContactButton: { type: Boolean, default: false }
});

const emit = defineEmits(["scroll-to"]);
</script>

<template>
  <header>
    <NavBar @scroll-to="emit('scroll-to', $event)" />

    <Hero
        :title="title"
        :background="background"
        :show-contact-button="showContactButton"
        @scroll-to="emit('scroll-to', $event)"
    />
  </header>
</template>
