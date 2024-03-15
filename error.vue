<script setup>
const erreur = useError();
</script>

<template>
  <div class="text-center flex flex-col p-6 gap-6">
    <h1 v-if="erreur?.statusCode == 404" class="text-yellow-500 text-xl">
      404 Page Not Found
      
    </h1>

    <h1 v-else class="text-red-500 text-xl">Une erreur est survenue</h1>
    <p>{{ erreur?.message }}</p>
    <a href="/" class="hover:text-white"> Retour à l'accueil </a>
  </div>
</template>
