<script setup lang="ts">
useHead
  ({
    titleTemplate
      : (titleChunk
      ) => {
        return titleChunk
          ? `${titleChunk
          } - Desktop` : 'Desktop';
      }
  })
</script>
<template>
  <div>
    <div class="hidden lg:block">
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    <div class="lg:hidden text-2xl font-bold px-4 text-center h-screen flex flex-col justify-center items-center">
      Les jouets ne sont pas autorisés. Veuillez acheter un ordinateur.
    </div>
  </div>
</template>
