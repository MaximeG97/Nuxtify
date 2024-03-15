<script setup>
import ProfilePicture from "@/assets/ProfilePicture.jpg";

const user = ref({
  name: "Freddie",
  photo: ProfilePicture,
});

const showDropdown = ref(false);
</script>

<template>
  <div class="relative">
    <button
      class="rounded-full py-1 px-2 flex items-center focus:outline-none"
      v-on:click="showDropdown = !showDropdown"
      :class="showDropdown ? 'bg-green' : 'bg-light'"
    >
      <img
        :src="user.photo ?? BlankUserPic"
        alt=""
        class="rounded-full h-6 w-6 mr-2"
      />
      <p class="text-white font-semibold text-xs mr-3">{{ user.name }}</p>
      <i class="text-white">
        <svg
          focusable="false"
          aria-hidden="true"
          style="width: 24px; height: 24px"
          viewBox="0 0 24 24"
          :class="{ 'rotate-180': showDropdown }"
        >
          <path
            fill="currentColor"
            d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
          />
        </svg>
      </i>
      <!-- Icône inverse -->
      <!-- <i class="text-white">
        <svg focusable="false" aria-hidden="true" style="width:24px;height:24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7.4,15.4L12,10.8L16.6,15.4L18,14L12,8L6,14L7.4,15.4Z" />
        </svg>
      </i> -->
    </button>
    <!-- Dropdown -->
    <div
      style="display: none"
      class="absolute bg-light w-full rounded mt-1"
      v-show="showDropdown"
    >
      <button
        class="w-full text-sm py-2 text-lightest hover:text-white border-b border-white opacity-75 hover:opacity-100 focus:outline-none"
      >
        Profil
      </button>
      <button
        class="w-full text-sm py-2 text-lightest hover:text-white border-b border-light opacity-75 hover:opacity-100 focus:outline-none"
      >
        Déconnexion
      </button>
    </div>
  </div>
</template>
