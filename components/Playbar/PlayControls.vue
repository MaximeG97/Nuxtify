<script setup>
// Contrôles de lecture

// Temporaire... devrait être dans le store
const isPlaying = ref(false);
const changingTrack = ref(false);
const audio = ref({});
// --- Ne pas modifier les valeurs ci-dessous ---
const scrubbing = ref(false);
const scrubbingHold = ref(false);
const songSliderVal = ref(0);
const elapsedTime = ref(0);
const maxTime = ref(30); // 30 secondes max
const timerID = ref(null);

const store = useMainStore();

onMounted(() => {
  // --- Ne pas modifier
  timerID.value = setInterval(handleTick, 1000);
});

function togglePlay() {
  /* ... */
}
function playTrack() {
  /* ... */
}
function shuffle() {
  /* ... */
}
function prev() {
  /* ... */
}
function next() {
  /* ... */
}

/* --- 🛑 Ne pas modifier ci-dessous --- */
function setTrackTime() {
  const newTime = Math.ceil((songSliderVal.value * maxTime.value) / 100);
  audio.value.currentTime = newTime;
  elapsedTime.value = newTime;
}

function handleUpdateTimer() {
  elapsedTime.value = ++elapsedTime.value;
}

function handleTick() {
  if (isPlaying.value) {
    if (elapsedTime.value >= maxTime.value || changingTrack.value) {
      togglePlay();
      elapsedTime.value = 0;
    } else {
      handleUpdateTimer();
    }
  }
  if (!scrubbingHold.value) {
    songSliderVal.value = (elapsedTime.value / maxTime.value) * 100;
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

onBeforeUnmount(() => {
  clearInterval(timerID.value);
});
</script>

<template>
  <!-- Ne pas (trop) modifier ce template -->
  <div class="flex flex-col justify-center w-1/3 items-center -mb-3">
    <div class="flex items-center">
      <button
        class="mx-3 text-lightest hover:text-white focus:outline-none"
        v-on:click="shuffle"
      >
        <i class="md-18">
          <span class="sr-only">Lecture aléatoire</span>
          <svg
            focusable="false"
            aria-hidden="true"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z"
            />
          </svg>
        </i>
      </button>
      <button
        class="mx-3 text-lightest hover:text-white focus:outline-none"
        v-on:click="prev"
      >
        <i class="">
          <span class="sr-only">Piste précédente</span>
          <svg
            focusable="false"
            aria-hidden="true"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z"
            />
          </svg>
        </i>
      </button>
      <button
        class="rounded-full h-8 w-8 flex items-center justify-center mx-3 -mt-1 border-lightest border text-lightest hover:text-white focus:outline-none"
        v-on:click.prevent="store.togglePlay()"
      >
        <i v-if="!store.isPlaying" class="">
          <span class="sr-only">Lecture</span>
          <svg
            focusable="false"
            aria-hidden="true"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
        </i>
        <i v-if="store.isPlaying" class="">
          <span class="sr-only">Pause</span>
          <svg
            focusable="false"
            aria-hidden="true"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </svg>
        </i>
      </button>
      <button
        class="mx-3 text-lightest hover:text-white focus:outline-none"
        v-on:click="next"
      >
        <i class="">
          <span class="sr-only">Piste suivante</span>
          <svg
            focusable="false"
            aria-hidden="true"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
          </svg>
        </i>
      </button>
      <button class="mx-3 text-lightest hover:text-white focus:outline-none">
        <i class="md-18">
          <span class="sr-only">Répéter</span>
          <svg
            focusable="false"
            aria-hidden="true"
            style="width: 24px; height: 24px"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z"
            />
          </svg>
        </i>
      </button>
    </div>
    <div class="z-10 flex items-center justify-between relative my-2 w-full">
      <p class="text-xs text-lightest -ml-10">
        {{
          scrubbingHold
            ? formatTime(Math.ceil((songSliderVal * 30) / 100))
            : formatTime(elapsedTime)
        }}
      </p>
      <div class="z-0 absolute rounded w-full h-1 bg-lightest opacity-50" />
      <div
        class="z-0 absolute rounded h-1"
        :class="scrubbing ? 'bg-green' : 'bg-white'"
        :style="{ width: `${songSliderVal}% ` }"
      />
      <input
        v-model="songSliderVal"
        class="absolute appearance-none w-full h-1 rounded outline-none bg-lightest bg-opacity-0"
        :class="scrubbing ? 'play-slider-thumb' : 'slider-thumb-none'"
        type="range"
        min="0"
        max="100"
        step="1"
        v-on:mouseover="scrubbing = true"
        v-on:mouseout="scrubbing = false"
        v-on:change="setTrackTime"
        v-on:mousedown="scrubbingHold = true"
        v-on:mouseup="scrubbingHold = false"
      />
      <p class="text-xs text-lightest -mr-10">
        {{
          scrubbingHold
            ? formatTime(Math.ceil(30 - (songSliderVal * 30) / 100))
            : formatTime(30 - elapsedTime)
        }}
      </p>
    </div>
  </div>
</template>

<style>
.play-slider-thumb::-webkit-slider-thumb {
  @apply appearance-none w-3 h-3 z-20 rounded-full bg-white cursor-pointer;
}
.slider-thumb::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 rounded-full bg-white cursor-pointer;
}
.slider-thumb-none::-webkit-slider-thumb {
  @apply appearance-none;
}
</style>
