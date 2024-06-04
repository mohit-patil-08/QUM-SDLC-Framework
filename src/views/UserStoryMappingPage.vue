<template>
    <div>
        <h1>User Story Mapping</h1>
        <v-form>
            <br/>
            <v-autocomplete v-model="sceanrioSelected" :items="scenariosList" label="Scenarios"
                return-object variant="underlined" density="comfortable" color="black" item-color="black"
                item-title="title" item-value="value" hide-details :menu-props="{ scrollStrategy: 'none' }" multiple >
            </v-autocomplete>
            <br/>    
            <v-select v-model="userStorySelected" :items="userStoryList" label="User Story" return-object variant="underlined" density="comfortable" color="black" item-color="black" item-title="title" item-value="value" hide-details :menu-props="{ scrollStrategy: 'none' }" >
            </v-select >
            <br/>
            <v-autocomplete v-model="metricsSelected" :items="metricsList" label="Metrics" return-object variant="underlined" density="comfortable" color="black" item-color="black" item-title="title" item-value="value" hide-details :menu-props="{ scrollStrategy: 'none' }" multiple chips>
            </v-autocomplete>
            <br/>
            <div class="submit-btn">
                <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
const sceanrioSelected = ref([]);
const userStorySelected = ref("");
const metricsSelected = ref([]);
const scenariosList = ref([
    {title: "Scenario 1", value: "sceanrio1"},
    {title: "Scenario 2", value: "sceanrio2"},
    {title: "Scenario 3", value: "sceanrio3"},
]);
const userStoryList = ref([
    {title: "User Story 1", value: "userstory 1"},
    {title: "User Story 2", value: "userstory 2"},
    {title: "User Story 3", value: "userstory 3"},
]);
const metricsList = ref([
    {title: "Performance", value: "performance"},
    {title: "Accessibility", value: "accessibility"},
    {title: "Internationalization", value: "internationalization"},
    {title: "Browser Performance", value: "browser performance"},
    {title: "Design Hygiene", value: "design hygiene"}
]);
</script>

<style>
</style>