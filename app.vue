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
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer>
      <template #default="{ message }">
        <p>{{ message }} was loaded.</p>
      </template>
    </NuxtRouteAnnouncer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
