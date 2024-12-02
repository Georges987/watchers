<script setup lang="ts">
const notif_dialog = ref(false)

const timer = ref({
    date: "",
    hour: "",
})

const updateTime = () => {
    const date = new Date()
    timer.value.date = date.toLocaleDateString()
    timer.value.hour = date.toLocaleTimeString()
}

onMounted(() => {
    updateTime()
    setInterval(() => {
        updateTime()
    }, 1000)
})
</script>

<template>
    <div id="base" class="h-screen  text-black flex flex-col w-full bg-black">
        <div class="h-full w-full">
            <slot />
        </div>
        <footer class="flex justify-between space-x-4 w-full pb-4 px-4">
            <div class="w-1/4 flex px-3 py-2 space-x-3 bg-secondary-100 rounded-md">
                <div class="p-2 rounded-lg" v-ripple>
                    <SuperIcon />
                </div>
            </div>
            <div class="w-1/2 bg-secondary-100 justify-center text-sm flex rounded-lg">
                <div class="my-auto">
                    Ashborn Arc, v0.0.3 | Limited.
                </div>
            </div>
            <v-dialog origin="overlap" location="bottom left" v-model="notif_dialog">
                <div class="bg-secondary-100 w-80 h-[500px]">
                    HKBDFHF
                </div>
            </v-dialog>
            <div class="flex justify-between font-bold w-1/4 px-3 py-2 bg-secondary-100 text-lg rounded-lg">
                <div class="my-auto text-sm p-2 select-none" v-ripple>
                    {{ timer.hour }} | {{ timer.date }}
                </div>
                <div class="my-auto p-2 rounded-lg" v-ripple>
                    <UtilsIcon />
                </div>
                <div @click="notif_dialog = !notif_dialog" class="my-auto rounded-full select-none" v-ripple>
                    <div class="absolute text-sm text-secondary-100 mx-2 my-1.5">
                        52
                    </div>
                    <NotifAvatarIcon />
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
#base {
    font-family: 'Montserrat', sans-serif;
    background: url('~/assets/background/arch.png') no-repeat;
    background-size: cover;
}
</style>