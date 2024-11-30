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
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
