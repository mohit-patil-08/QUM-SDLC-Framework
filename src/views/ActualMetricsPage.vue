<template>
    <div>
        <h1>Metrics </h1>
        <br/>
        <v-row>
            <v-col cols="12">
            <v-autocomplete
                v-model="selectedScenarios"
                :items="scenariosList"
                label="Select Items"
                multiple
                dense
                item-title="title"
                item-value="value"
                ></v-autocomplete>
            </v-col>
        </v-row>
        <br/>
        <v-form>
            <h3>Performance</h3>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field
                        label="Total Number of Scenarios"
                        v-model="totalScenariosForPerformance"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Average User Action Time Per Scenario"
                        v-model="averageUserActionTimePerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Average System Delay Per Scenario"
                        v-model="averageSystemDelayPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Average Network Calls Per Scenario"
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
                        label="Total Number of Scenarios"
                        v-model="totalScenariosForAccessblity"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field
                        label="Avg. No. of Violations Per Scenario for Critical Category"
                        v-model="averageViolationsCritical"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field
                        label="Avg. No. of Violations Per Scenario for Serious Category"
                        v-model="averageViolationsSerious"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field
                        label="Avg. No. of Violations Per Scenario for Moderate Category"
                        v-model="averageViolationsModerate"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
                
                <v-col cols="12" md="6">
                    <v-text-field
                        label="Avg. No. of Violations Per Scenario for Minor Category"
                        v-model="averageViolationsMinor"
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
                        label="Total Number of Scenarios"
                        v-model="totalScenariosForBrowserPerformance"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Avg. Page Completion Per Scenario"
                        v-model="averagePageCompletion"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Avg. Network Latency Per Scenario"
                        v-model="averageNetworkLatency"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Avg. Content Download Per Scenario"
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
                <v-col cols="12" md="3">
                    <v-text-field
                        label="Total Number of Scenarios"
                        v-model="totalScenariosForI18N"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Average Number of Violations Per Scenario for Language"
                        v-model="averageViolationLanguage"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-combobox
                    v-model="applicationLanguages"
                    label="Add Application Languages and press enter"
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
                        label="Total No. Of Scenarios"
                        v-model="totalScenariosForDesignHygiene"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Unique Fonts Per Scenario"
                        v-model="uniqueFontsPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Unique Colors Per Scenario"
                        v-model="uniqueColorsPerScenario"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="3">
                    <v-text-field
                        label="Unique Background Colors Per Scenario"
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
</script>

<style scoped>
.input-box {
    max-width: 300px; /* Adjust this value as needed */
    margin: auto;
}
</style>

<!-- Total Number of Scenarios	
1.3333333333333333
Average User Action Time Per Scenario	
11.85s
Average System Delay Per Scenario	
26.20s
Average Network Calls Per Scenario	
937 -->

<!-- Total Number of Scenarios	
Average Number of Violations Per Scenario for Critical Category	
Average Number of Violations Per Scenario for Serious Category	
Average Number of Violations Per Scenario for Moderate Category	
Average Number of Violations Per Scenario for Minor Category	 -->



<!-- Total Number of Scenarios	
Average Page Completion Per Scenario	
Average Network Latency Per Scenario	
Average Content Download Per Scenario	 -->


<!-- Total Number of Scenarios	
Application Language	
Average Number of Violations Per Scenario for Hindi	1031 -->



<!-- Total Number of Scenarios for Design Hygiene
Unique Fonts Per Scenario	
Unique Colors Per Scenario	
Unique Background Colors Per Scenario -->