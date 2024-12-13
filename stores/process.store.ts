import { defineStore } from 'pinia'
import type { IProcess } from '~/shared/models';


export const useProcessStore = defineStore('process', () => {
    const processes = shallowRef<IProcess[]>([])
    const currentProcess = shallowRef<IProcess | null>(null)

    function getProcesses() {
        return processes.value
    }

    function getCurrentProcess() {
        return currentProcess.value
    }

    function addProcess(process: IProcess) {
        processes.value.push(process)
    }

    function setCurrentProcess(process: IProcess) {
        currentProcess.value = process
    }

    function clearCurrentProcess() {
        currentProcess.value = null
    }

    function removeProcess(id: string) {
        const index = processes.value.findIndex((process) => process.id === id)
        if (index > -1) {
            processes.value.splice(index, 1)
        }

        if (currentProcess.value?.id === id) {
            currentProcess.value = null
        }
    }

    return {
        processes,
        currentProcess,
        getProcesses,
        getCurrentProcess,
        addProcess,
        setCurrentProcess,
        clearCurrentProcess,
        removeProcess,
    }
},
    {
        persist: true,
    })