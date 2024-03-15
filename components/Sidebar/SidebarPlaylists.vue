<script setup>
// const playlists = ref([])
</script>

<template>
  <div>
    <div class="mx-5">
      <h1 class="mb-3 text-xs text-lightest tracking-widest uppercase">
        Playlists
      </h1>
      <button
        class="flex items-center justify-start mb-2 opacity-75 hover:opacity-100 focus:outline-none"
      >
        <img
          src="@/assets/AddNew.png"
          class="h-8 w-8 mr-3"
          alt="Add New"
        />
        <!-- Bouton de création de playlist -->
        <span class="text-sm text-white font-semibold">
          Créer une playlist
        </span>
      </button>
      <div class="h-px w-full bg-light my-3" />
    </div>
    <div class="mx-5 flex-shrink">
      <div class="w-full flex flex-shrink flex-col min-h-0">
        <!-- Liste des playlists -->
        <button class="text-lightest hover:text-white text-sm py-1 text-left">
          Nom de la playlist
        </button>
      </div>
    </div>
  </div>
</template>
