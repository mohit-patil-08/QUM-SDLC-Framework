<template>
    <div>
        <h1>Flows</h1>
        <v-form>
            <v-select v-model="tasksSelected" :items="tasksList" label="Tasks" return-object variant="underlined"
                density="comfortable" color="black" item-color="black" item-title="title" hide-details
                :menu-props="{ scrollStrategy: 'none' }">
            </v-select>

            <v-select v-model="tasksSelected" :items="tasksList" label="Tasks" return-object variant="underlined"
                density="comfortable" color="black" item-color="black" item-title="title" hide-details
                :menu-props="{ scrollStrategy: 'none' }">
            </v-select>

            <div class="submit-btn">
                <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const scenario = ref("");
const steps = ref("");
</script>

<style></style>