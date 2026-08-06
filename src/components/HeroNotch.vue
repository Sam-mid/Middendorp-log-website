<script setup>

</script>

<template>
  <div class="notch bg-middendorp_white hidden sm:block"></div>
</template>

<style scoped>
.notch {
  --notch-slant: calc(var(--notch-height, 145px) * 0.3573);

  position: absolute;
  right: 0;
  bottom: 0;
  height: var(--notch-height, 145px);

  /* De vector is 915px breed in een frame van 1600px = 57,19%. */
  width: 57.19%;
  clip-path: polygon(var(--notch-slant) 0, 0 100%, 100% 100%, 100% 0);
}
</style>
