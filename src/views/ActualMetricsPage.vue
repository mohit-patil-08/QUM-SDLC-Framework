<template>
    <div>
        <h1>Metrics </h1>
        <br/>
        <v-row>
            <v-col cols="6">
                <v-autocomplete
                    v-model="selectedScenarios"
                    :items="scenariosList"
                    label="Select Scenario"
                    dense
                    item-title="title"
                    item-value="value"
                    >
                </v-autocomplete>
            </v-col>
            <v-col col="6">
                <v-select v-model="typeOfReportSelected" :items="typeOfReportList" label="Metrics type" return-object color="black" item-color="black"
                        item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
                </v-select>
            </v-col>
        </v-row>
        <br/>
        <v-form>
            <h3>Performance</h3>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        label=" User Action Time"
                        v-model="UserActionTimePerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="System Delay"
                        v-model="averageSystemDelayPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Network Calls"
                        v-model="averageNetworkCallsPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
            </v-row>
            <hr/>
            <br/>
            <h3>Accessibility</h3>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field
                        label="Accessibility Standard"
                        v-model="averageViolationsCritical"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
            </v-row>
            <hr/>
            <br/>
            <h3>Browser Performance</h3>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        label="Page Completion"
                        v-model="averagePageCompletion"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Network Latency"
                        v-model="averageNetworkLatency"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Content Download"
                        v-model="averageContentDownload"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
            </v-row>
            <hr/>
            <br/>
            <h3>Internationalization</h3>
            <v-row>
                <v-col cols="12" md="6">
                    <v-combobox
                    v-model="applicationLanguages"
                    label="Languages"
                    multiple
                    chips
                    clearable
                    outlined
                    dense
                    deletable-chips
                ></v-combobox>
                </v-col>
            </v-row>
            <hr/>
            <br/>
            <h3>Design Hygiene</h3>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        label="Unique no. of Fonts"
                        v-model="uniqueFontsPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Unique no. of Colors"
                        v-model="uniqueColorsPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Unique no. of Background Colors"
                        v-model="uniqueBackgroundColorsPerScenario"
                        outlined
                        dense
                    ></v-text-field>
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

const totalScenariosForPerformance = ref('');
const averageUserActionTimePerScenario = ref('');
const averageSystemDelayPerScenario = ref('');
const averageNetworkCallsPerScenario = ref('');

const totalScenariosForAccessblity = ref('');
const averageViolationsCritical = ref('');
const averageViolationsSerious = ref('');
const averageViolationsModerate = ref('');
const averageViolationsMinor = ref('');

const totalScenariosForBrowserPerformance = ref('');
const averagePageCompletion = ref('');
const averageNetworkLatency = ref('');
const averageContentDownload = ref('');

const totalScenariosForI18N = ref('');
const averageViolationLanguage = ref('');
const applicationLanguages = ref([]);

const totalScenariosForDesignHygiene = ref('');
const uniqueFontsPerScenario = ref([]);
const uniqueColorsPerScenario = ref([]);
const uniqueBackgroundColorsPerScenario = ref([]);

const scenariosList = ref([
    {title: "Scenario 1", value: "sceanrio1"},
    {title: "Scenario 2", value: "sceanrio2"},
    {title: "Scenario 3", value: "sceanrio3"},
]);

const selectedScenarios = ref([]);

const typeOfReportSelected = ref(null);
const typeOfReportList = ref([
    { title: "Functional", value: "functional" },
    { title: "Design", value: "design" }
]);
</script>

<style scoped>
.input-box {
    max-width: 300px; /* Adjust this value as needed */
    margin: auto;
}
</style>

<!-- Total Number of Scenarios	
1.3333333333333333
Average User Action Time	
11.85s
Average System Delay	
26.20s
Average Network Calls	
937 -->

<!-- Total Number of Scenarios	
Average Number of Violations for Critical Category	
Average Number of Violations for Serious Category	
Average Number of Violations for Moderate Category	
Average Number of Violations for Minor Category	 -->



<!-- Total Number of Scenarios	
Average Page Completion	
Average Network Latency	
Average Content Download	 -->


<!-- Total Number of Scenarios	
Application Language	
Average Number of Violations for Hindi	1031 -->



<!-- Total Number of Scenarios for Design Hygiene
Unique Fonts	
Unique Colors	
Unique Background Colors -->