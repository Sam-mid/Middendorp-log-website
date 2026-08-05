<!-- src/components/BaseButton.vue -->
<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: "primary" // opties: primary, secondary, outline
  },
  size: {
    type: String,
    default: "md" // opties: sm, md, lg, xl
  },
  type: {
    type: String,
    default: "button"
  }
});

const baseClasses =
    "inline-flex items-center justify-center font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variantClasses = computed(() => {
  switch (props.variant) {
    case "secondary":
      return "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-400";
    case "outline":
      return "border border-middendorp_darkgreen text-middendorp_darkgreen hover:bg-middendorp_darkgreen hover:text-white focus:ring-middendorp_darkgreen";
    default:
      return "bg-middendorp_green text-white hover:bg-green-700 focus:ring-green-500";
  }
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-3 py-1 text-sm";
    case "lg":
      return "px-10 py-5 text-xl";
    case "xl":
      // Hero-formaat: schaalt mee vanaf 1080px, zodat de knop niet wegvalt
      // tegen een grote hero-afbeelding.
      return "px-10 py-5 text-xl min-[1080px]:px-14 min-[1080px]:py-6 min-[1080px]:text-2xl";
    default:
      return "px-4 py-2 text-base";
  }
});
</script>

<template>
  <button
      :type="type"
      :class="[baseClasses, variantClasses, sizeClasses]"
  >
    {{ label }}
  </button>
</template>

<style scoped>
</style>
