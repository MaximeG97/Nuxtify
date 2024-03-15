<script setup>
// Ces méthodes seront à récupérer depuis le store
function toggleCoverArt() {
  isCoverArtBig.value = !isCoverArtBig.value;
}

// Ces données (fictives pour le moment) seront à récupérer depuis le store
const nowTrack = ref({
  data: {
    preview: "http://www.perdu.com/", // Lien de téléchargement du fichier audio
  },
});

const store = useMainStore();

const isCoverArtBig = ref(true); // Affiche-t-on l'image de couverture en grand ?
</script>

<template>
  <div class="flex flex-col w-full z-10">
    <!-- Lien de téléchargement -->
    <button
      class="bg-black flex items-center justify-start text-sm mx-5 py-4 text-lightest hover:text-white"
    >
      <i class="mr-3">
        <svg
          focusable="false"
          aria-hidden="true"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
          />
        </svg>
      </i>
      <p class="text-sm font-semibold">
        <a :href="nowTrack.data.preview" target="_blank">Télécharger</a>
      </p>
    </button>
    <!-- Image de couverture -->
    <div class="relative">
      <div
        class="w-full h-full flex justify-end items-start absolute px-2 cursor-pointer opacity-0 hover:opacity-100"
      >
        <button
          class="bg-black rounded-full h-6 w-6 mt-2"
          v-on:click="toggleCoverArt"
        >
          <i class="text-white">
            <span class="sr-only">Changer l'affichage</span>
            <svg
              focusable="false"
              aria-hidden="true"
              style="width: 24px; height: 24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
              />
            </svg>
          </i>
        </button>
      </div>
      <!-- Image -->
      <img
        :src="
          store.nowTrack?.album?.cover_big ?? '/images/tracks/LaBonneEtoile.jpg'
        "
        alt="Playing Now"
        class="w-full object-cover"
        :style="{ height: isCoverArtBig ? '' : '50px' }"
      />
    </div>
  </div>
</template>
