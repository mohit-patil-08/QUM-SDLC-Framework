<template>
    <div>
        <h1>Persona</h1>
        <v-form>
            <v-text-field label="Description" v-model="description" outlined></v-text-field>

            <v-row v-if="goals.length">
                <v-col cols="auto">
                    <div>Goals: </div>
                </v-col>
                <v-col>
                    <ul class="ml-9">
                        <li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
                    </ul>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="11">
                    <v-text-field label="Goals" v-model="currentGoal" outlined></v-text-field>
                </v-col>
                <v-col cols="1">
                    <v-btn icon @click="addGoalsField">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-text-field label="Painpoints" v-model="painpoints" outlined></v-text-field>

            <div class="submit-btn">
                <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
const currentGoal = ref("");
const goals = ref([]);
const painpoints = ref("");

const addGoalsField = () => {
    if (currentGoal.value.trim() !== '') {
        goals.value.push(currentGoal.value);
        currentGoal.value = "";
    }
}
</script>

<style></style>