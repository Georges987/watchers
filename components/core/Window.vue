<script setup lang="ts">
import type { IProcess } from '~/shared/models';

defineProps({
    process: {
        type: Object as () => IProcess,
        required: true
    }
})

const proStore = useProcessStore()
</script>

<template>
    <v-card height="100%" width="100%" color="black">
        <div>
            <div class="flex justify-between py-2 px-4">
                <div class="flex space-x-4">
                    <div
                        @click="proStore.removeProcess(process.id)"
                        class="rounded-full bg-red-500 transition-colors ease-in-out duration-300 hover:bg-red-700 h-4 w-4">
                    </div>
                    <div
                        class="rounded-full bg-yellow-500 transition-colors ease-in-out duration-300 hover:bg-yellow-700 h-4 w-4">
                    </div>
                    <div
                        class="rounded-full bg-green-500 transition-colors ease-in-out duration-300 hover:bg-green-700 h-4 w-4">
                    </div>
                </div>
                <div class="font-bold mr-4">
                    {{ process.name }}
                </div>
            </div>
        </div>

        <Component :is="process.program.components" />

        <div class="absolute bottom-2 w-full px-4">
            by Georges AYENI
        </div>
    </v-card>
</template>