<script setup lang="ts">
import '~/assets/styles/drag.css';
import VueDraggableResizable from 'vue-draggable-resizable'
import { useProcessStore } from '~/stores/process.store';
import TerminalVue from '~/components/programs/Terminal.vue';
import Explorer from '~/components/programs/Explorer.vue';
import Settings from '~/components/programs/Settings.vue';
import TaskManager from '~/components/programs/TaskManager.vue';

const notif_dialog = ref(false)
const proStore = useProcessStore()
const timer = ref({
    date: "",
    hour: "",
})
const showModal = ref(false)

const updateTime = () => {
    const date = new Date()
    timer.value.date = date.toLocaleDateString()
    timer.value.hour = date.toLocaleTimeString()
}

const search = ref('')

const application = shallowRef([
    {
        name: 'Explorer',
        icon: 'mdi-folder',
        component: Explorer,
    },
    {
        name: 'Terminal',
        icon: 'mdi-console',
        component: TerminalVue,
    },
    {
        name: 'Task manager',
        icon: 'mdi-turbine',
        component: TaskManager,
    },
    {
        name: 'Settings',
        icon: 'mdi-cog',
        component: Settings,
    }
])

const applis = computed(() => {
    return application.value.filter((app) => {
        return app.name.toLowerCase().includes(search.value)
    })
})

function launchApp(app: any) {

    showModal.value = false

    if (proStore.currentProcess) {
        proStore.addProcess(proStore.currentProcess)

        proStore.setCurrentProcess({
            id: app.name.toLowerCase() + '-' + Math.random().toString(36).substr(2, 9),
            name: app.name,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dicta veniam facilis esse porro sed iusto nisi cumque repudiandae. Neque provident facere exercitationem id nobis? Fugiat ab quo perspiciatis? Minima.',
            key: app.name.toLowerCase() + '-key',
            status: 'active',
            program: {
                id: app.name.toLowerCase() + 'program',
                name: app.name,
                components: app.component,
            },
            created: new Date().toISOString(),
            updated: new Date().toISOString()
        })

    } else {
        proStore.setCurrentProcess({
            id: app.name.toLowerCase() + '-' + Math.random().toString(36).substr(2, 9),
            name: app.name,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error dicta veniam facilis esse porro sed iusto nisi cumque repudiandae. Neque provident facere exercitationem id nobis? Fugiat ab quo perspiciatis? Minima.',
            key: app.name.toLowerCase() + '-key',
            status: 'active',
            program: {
                id: app.name.toLowerCase() + "_" + 'program',
                name: app.name,
                components: app.component,
            },
            created: new Date().toISOString(),
            updated: new Date().toISOString()
        })
    }
}

function toogleModal() {

    showModal.value = !showModal.value
}

function toogleOnFocus(id: string) {
    const current = proStore.processes.findIndex((process) => process.id === id)
    const currentProcess = proStore.currentProcess
    proStore.processes.forEach((process, index) => {
        if (process.id === id) {
            proStore.processes[current] = currentProcess ?? process
            proStore.setCurrentProcess(process)
        }
    })
}

onMounted(() => {
    updateTime()
    setInterval(() => {
        updateTime()
    }, 1000)
})
</script>

<template>
    <div id="base" class="h-screen relative text-black flex flex-col w-full bg-black">
        <div class="h-full w-full">
            <VueDraggableResizable @dblclick="toogleOnFocus(process.id)" v-for="process in proStore.processes"
                :key="process.id" :w="600" :h="400" :parent="true">
                <Window :process="process" />
            </VueDraggableResizable>
            <VueDraggableResizable v-if="proStore.currentProcess" :w="600" :h="400" :parent="true">
                <Window :process="proStore.currentProcess" />
            </VueDraggableResizable>
            <v-dialog transition="v-slide-y-transition" :opacity="0" width="600" v-model="showModal">
                <div class="absolute -top-[225px] h-[600px] w-[600px] rounded-lg p-6 bg-white">
                    <div class="font-bold text-primary-100 text-lg my-2">
                        My Applications
                    </div>
                    <hr>
                    <v-text-field class="w-full my-4" v-model="search" prepend-inner-icon="mdi-magnify" type="search"
                        placeholder="Search for an application" outlined dense clearable></v-text-field>
                    <div class="h-[300px] overflow-auto grid grid-cols-3 gap-4">
                        <div v-for="app in applis" :key="app.name"
                            class="hover:text-primary-100 h-[100px] duration-200 ease-in-out transition-colors p-5 flex justify-center flex-col items-center select-none col-span-1"
                            v-ripple @click="launchApp(app)">
                            <v-icon :icon="app.icon"></v-icon>
                            <div>
                                {{ app.name }}
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between mt-10">
                        <Power />
                        <v-avatar color="grey" @click="launchApp({
                            name: 'Settings',
                            icon: 'mdi-cog',
                            component: Settings,
                        })"
                            image="https://images.pexels.com/photos/8638618/pexels-photo-8638618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></v-avatar>
                    </div>
                </div>
            </v-dialog>
        </div>
        <footer class="flex justify-between space-x-4 w-full pb-4 px-4">
            <div class="w-1/4 flex px-3 py-2 space-x-3 bg-secondary-100 rounded-md">
                <div class="p-2 rounded-lg" v-ripple>
                    <SuperIcon @click="toogleModal" />
                </div>
            </div>
            <div class="w-1/2 bg-secondary-100 justify-center text-sm flex rounded-lg">
                <div class="my-auto">
                    <slot /> Ashborn Arc, v0.0.3 | Limited.
                </div>
            </div>
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