<template>
    <div>
        <h1>Flows</h1>
        <v-form>
            <v-select v-model="scenarioSelected" :items="scenariosList" label="Scenarios" return-object color="black"
                item-color="black" item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
            </v-select>

            <v-select v-model="stepSelected" :items="stepsList" label="Steps" return-object color="black"
                item-color="black" item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
            </v-select>

            <div class="submit-btn">
                <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const scenarioSelected = ref(null);
const stepSelected = ref(null);
const scenariosList = ref([
    { title: "Scenario 1", value: "scenario1" },
    { title: "Scenario 2", value: "scenario2" },
    { title: "Scenario 3", value: "scenario3" },
]);
const stepsList = ref([
    { title: "Step 1", value: "step1" },
    { title: "Step 2", value: "step2" },
    { title: "Step 3", value: "step3" },
]);
</script>

<style></style>