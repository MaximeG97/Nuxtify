<script setup>
// Contrôle du volume
const changingVolume = ref(false)
const volume = ref(100)

function highlightVolumeBar() {
  changingVolume.value = true
}
</script>

<template>
  <!-- Ne pas (trop) modifier ce template -->
  <div class="flex items-center">
    <!-- Bouton volume -->
    <button class="flex">
      <i
        class="text-xl text-lightest hover:text-white"
        v-on:mouseover="changingVolume = true"
        v-on:mouseout="changingVolume = false"
      >
        <span class="sr-only">Volume</span>
        <svg
          focusable="false"
          aria-hidden="true"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
          />
        </svg>
      </i>
    </button>
    <!-- Slider volume -->
    <div class="relative w-24 mx-2 flex items-center">
      <div class="z-0 absolute rounded w-full h-1 bg-lightest opacity-50" />
      <div
        class="z-0 absolute rounded h-1"
        :class="changingVolume ? 'bg-green' : 'bg-lightest'"
        :style="{ width: `${volume}% ` }"
      />
      <input
        v-model="volume"
        class="absolute appearance-none w-full h-1 rounded bg-lightest bg-opacity-0 outline-none"
        :class="changingVolume ? 'slider-thumb' : 'slider-thumb-none'"
        type="range"
        min="0"
        max="100"
        step="1"
        v-on:mouseover="changingVolume = true"
        v-on:mouseout="changingVolume = false"
      />
    </div>
  </div>
</template>

<style>
.slider-thumb::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 rounded-full bg-white cursor-pointer;
}

.slider-thumb-none::-webkit-slider-thumb {
  @apply appearance-none;
}
</style>
