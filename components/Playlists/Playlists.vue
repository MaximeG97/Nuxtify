<script setup>
// import { playlists } from "@/assets/playlists"; // Utilisé temporairement dans data
import { useMainStore } from "@/stores/main.store";

const store = useMainStore();
// store.loadPlaylists();
await useAsyncData("playlists", () => store.loadPlaylists());
</script>

<template>
  <div class="mb-5">
    <h1 class="text-white font-semibold text-3xl mb-3">Playlists</h1>
    <div v-if="store.playlists" class="flex flex-wrap justify-between">
      <button
        v-for="playlist in store.playlists"
        :key="playlist.id"
        v-on:click="store.playTrack(playlist.tracks[0].tracks_id)"
        class="group flex-grow flex flex-row items-center text-white text-left font-semibold tracking-wide w-1/3 h-20 bg-gradient-to-b from-light to-light rounded mr-5 mb-3 md:w-56 xl:w-1/5 hover:from-gray-600 hover:to-gray-700 focus:outline-none"
      >
        <img
          :src="'https://api.alsacreations.net/assets/' + playlist.icon"
          alt=""
          class="h-full rounded-l"
        />
        <p class="px-3 line-clamp-2">
          {{ playlist.name }} ({{ playlist.tracks.length }})
        </p>
        <span
          class="hidden group-hover:flex rounded-full ml-auto mr-3 bg-green shadow-2xl focus:outline-none"
        >
          <i class="text-white text-center p-2">
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
        </span>
      </button>
    </div>
  </div>
</template>
