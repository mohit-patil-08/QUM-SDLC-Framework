<template>
    <div>
        <h1>Steps</h1>
        <v-form>
            <v-text-field
                label="Description"
                v-model="description"
                outlined
            ></v-text-field>

            <v-row v-if="actions.length">
                <v-col cols="auto">
                    <div>Actions: </div>
                </v-col>
                <v-col>
                    <ul class="ml-9">
                        <li v-for="(action, index) in actions" :key="index">{{ action }}</li>
                    </ul>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="11">
                    <v-text-field
                        label="Actions"
                        v-model="currentAction"
                        outlined
                    ></v-text-field>    
                </v-col>
                <v-col cols="1">
                    <v-btn icon @click="addActions">
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <div class="submit-btn">
                <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
const currentAction = ref("");
const actions = ref([]);

const addActions = () => {
    if(currentAction.value.trim() !== '') {
        actions.value.push(currentAction.value);
        currentAction.value = "";
    }
}
</script>

<style>
</style>