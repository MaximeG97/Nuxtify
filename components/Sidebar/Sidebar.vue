<template>
  <div
    class="w-56 bg-black h-full flex justify-between flex-col flex-none overflow-hidden"
  >
    <div class="flex flex-col flex-grow h-16">
      <div class="p-6">
        <img
          src="@/assets/logo.svg"
          class="h-10"
          alt="Nuxtify"
        />
      </div>
      <SidebarNav />
      <SidebarPlaylists />
    </div>
    <SidebarCoverArt />
  </div>
</template>
