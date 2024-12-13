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
        <slot></slot>
    </div>
</template>

<style scoped>
#base {
    font-family: 'Montserrat', sans-serif;
    background: url('~/assets/background/arch.png') no-repeat;
    background-size: cover;
}
</style>