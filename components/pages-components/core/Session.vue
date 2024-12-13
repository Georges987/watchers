<script setup lang="ts">
const password = ref('')
</script>

<template>
    <div class="h-screen flex flex-col justify-center items-center w-full">
        <div class="flex justify-between flex-col items-center p-6 h-2/3 w-[80%] backdrop-blur-xl rounded-lg shadow-lg">
            <div class="flex flex-col items-center">
                <div class="text-4xl font-bold text-gray-200 my-5">
                    Welcome to Ashborn Arc
                </div>
                <div class="text-xl text-gray-200 mt-4 w-2/3 text-center">
                    Please login to continue
                </div>
            </div>
            <div class="w-1/2">
                <div class="text-gray-200 text-xl my-8 text-center">
                    Ash
                </div>
                <div>
                    <v-text-field color="purple" v-model="password" placeholder="Password"></v-text-field>
                </div>
            </div>
            <div class="bg-primary-200 bg-opacity-20 px-20 select-none text-xl py-4 rounded-lg text-gray-200 mt-4 cursor-pointer">
                Shutdown
            </div>
        </div>
    </div>
</template>