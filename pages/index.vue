<template>
    <div>
        <div class="title text-xl w-20 bg-red-400">Hello the world</div>
        <TTY />
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