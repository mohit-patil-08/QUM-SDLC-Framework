<template>
    <div>
        <h1>Persona</h1>
        <v-form>
            <v-text-field
                label="Description"
                v-model="description"
                outlined
            ></v-text-field>

            <v-row>
                <v-col cols="11" v-for="(goal, index) in goals" :key="index">
                    <v-text-field
                        label="Goals"
                        v-model="goals[index]"
                        outlined
                    ></v-text-field>    
                </v-col>
                <v-col cols="1">
                    <v-btn icon @click="addGoalsField">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-text-field
                label="Painpoints"
                v-model="painpoints"
                outlined
            ></v-text-field>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
const goals = ref([""]);
const painpoints = ref("");

const addGoalsField = () => {
    goals.value.push('');
}
</script>

<style>
</style>