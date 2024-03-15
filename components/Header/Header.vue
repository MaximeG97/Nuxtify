<script setup></script>

<template>
  <div class="w-full sticky top-0 py-4 px-6 flex items-center justify-between">
    <!-- Pagination -->
    <div class="flex items-center">
      <button class="rounded-full bg-black w-8 h-8 text-white mr-3">
        <span class="sr-only">Précédent</span>
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </svg>
      </button>
      <button class="rounded-full bg-black w-8 h-8 text-white">
        <span class="sr-only">Suivant</span>
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
      </button>
    </div>
    <HeaderUserMenu />
  </div>
</template>
