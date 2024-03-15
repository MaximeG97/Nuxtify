<template>
  <div class="bg-dark h-screen text-lightest">
    <div class="flex relative z-0" style="height: 90.5vh">
      <Sidebar />
      <div class="w-full h-full relative overflow-y-scroll">
        <Header />
        <div class="px-8 py-2"><Playlists /></div>
        <slot />
      </div>
    </div>
    <ClientOnly>
      <Playbar />
    </ClientOnly>
  </div>
</template>
