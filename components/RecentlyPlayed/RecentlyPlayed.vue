<script setup>
// import { recentlyPlayed } from "@/assets/recentlyPlayed"; // Utilisé temporairement dans data
import { useMainStore } from "@/stores/main.store";
import { recentlyPlayed } from "~/assets/recentlyPlayed";

const store = useMainStore();
// store.loadRecentlyPlayed();
await useAsyncData("recentlyPlayed", () => store.loadRecentlyPlayed());
</script>

<template>
  <div>
    <h1 class="text-white font-semibold text-3xl mb-3">Écoutes récentes</h1>
    <div v-if="store.recentlyPlayed" class="flex flex-wrap justify-between">
      <button
        v-for="playedItem in store.recentlyPlayed"
        :key="recentlyPlayed.id"
        class="group flex-grow flex flex-col items-center text-white text-left font-semibold tracking-wide w-32 bg-opacity-25 bg-gradient-to-b from-light to-light rounded mr-5 mb-3 hover:from-gray-700 hover:to-gray-800 focus:outline-none"
      >
        <div class="relative">
          <p class="p-5">
            <img
              :src="'https://api.alsacreations.net/assets/' + playedItem.icon"
              :alt="playedItem.name"
              class="h-1/6 rounded relative shadow-md"
            />
          </p>
          <span
            class="hidden group-hover:flex absolute bottom-0 right-0 rounded-full mb-8 mr-8 bg-green shadow-2xl focus:outline-none"
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
        </div>
        <p class="w-full px-5 pb-2 truncate">
          {{ playedItem.name }}
        </p>
        <p
          v-if="playedItem.artist"
          class="w-full px-5 pb-10 truncate text-xs font-normal text-lightest"
        >
          {{ playedItem.artist }}
        </p>
        <p
          v-if="playedItem.description"
          class="w-full px-5 pb-10 truncate text-xs font-normal text-lightest"
        >
          {{ playedItem.description }}
        </p>
      </button>
    </div>
  </div>
</template>
