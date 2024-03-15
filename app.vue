<script setup>
useHead({
  title: "Nuxtify",
  meta: [
    {
      name: "description",
      content: "Nuxtify, une application de musique",
    },
  ],
  link: [
    {
      type: "image/x-icon",
      href: "/nuxtify.ico",
      rel: "icon",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
