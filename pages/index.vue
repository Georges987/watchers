<template>
    <div>
        <NuxtLoadingIndicator
            color="black"
            :duration="200"
        />
    </div>
</template>

<script setup lang="ts">
const { $anime } = useNuxtApp()

onMounted(() => {
    $anime({ 
        targets: '.title', 
        translateY: 250,
        translateX: 250,
        duration: 2000,
        loop: true,
    })
})
</script>