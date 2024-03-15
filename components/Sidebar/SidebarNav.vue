<script setup>
const pages = ref([
  { id: 1, to: '/', name: 'Accueil', icon: 'home' },
  { id: 2, to: 'search', name: 'Rechercher', icon: 'magnify' },
  { id: 3, to: 'library', name: 'Bibliothèque', icon: 'chart-box-outline' },
])
</script>

<template>
  <div class="mx-2 mb-5">
    <!-- Liens de navigation -->
    <NuxtLink
      v-for="page in pages" :key="page.id"
      :href="page.to"
      active-class="bg-light text white"
      class="w-full text-sm font-semibold rounded px-3 py-2 flex items-center justify-start focus:outline-none text-lightest hover:text-white"
    >
      <span class="mr-3">
        <!-- Icône -->
        <img
          :src="`/icons/${page.icon}.svg`"
          alt=""
        />
      </span>
      <p>{{ page.name }}</p>
    </NuxtLink>
  </div>
</template>

<style>
/* .router-link-active {
  @apply bg-light text-white;
} */
</style>
