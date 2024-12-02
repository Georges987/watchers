<script setup lang="ts">
const model = ref(true)
</script>

<template>
    <v-dialog v-model="model">
        <v-card>
            <div>
                <div
                    class=""
                >
                    <v-btn
                        color="red"
                        rounded="full"
                    >x</v-btn>
                    <v-btn
                        color="yellow"
                        rounded="full"
                    >o</v-btn>
                    <v-btn
                        color="green"
                        rounded="full"
                    >-</v-btn>
                </div>
                <div></div>
                <div></div>
            </div>
        </v-card>
    </v-dialog>
</template>