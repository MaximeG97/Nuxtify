<script setup>
// Barre de lecture (détails, contrôles, volume)
import PlayDetails from './PlayDetails.vue'
import PlayControls from './PlayControls.vue'
import SoundControls from './SoundControls.vue'
</script>

<template>
  <div
    class="w-full flex items-center justify-between px-4 bg-light z-10 relative"
    style="height: 9.5vh"
  >
    <PlayDetails />
    <PlayControls />
    <SoundControls />
  </div>
</template>
