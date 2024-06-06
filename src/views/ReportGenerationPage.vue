<template>
    <div>
        <br/>
        <h1>Report Generation</h1>
        <v-form>
            <v-row>
                <v-col cols="12" md="6">
                    <v-select v-model="typeOfReportSelected" :items="typeOfReportList" label="Type Of report" return-object color="black" item-color="black"
                        item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
                    </v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="userStorySelected" :items="userStoryList" label="User Story" return-object color="black" item-color="black" item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
                    </v-select >
                </v-col>
            </v-row>   
            <br/>
            <hr/>
            <br/>
            <v-container v-if="userStorySelected && typeOfReportSelected">
                    <v-row justify="end">
                        <v-col cols="auto">
                        <v-btn color="primary" @click="downloadFile">
                            Download
                        </v-btn>
                        </v-col>
                    </v-row>
                    <br/>
                    <v-row>
                        <v-expansion-panels v-model="productPanel">
                            <v-expansion-panel>
                                <v-expansion-panel-title class="taskExpansionPanel">
                                    <v-row>
                                        <v-col cols="3" class="font-weight-bold d-flex align-center">Functional</v-col>
                                        <v-col cols="9" class="d-flex align-center">Persona / Task / Outcome / Scenario</v-col>
                                    </v-row>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="taskExpansionContent">
                                    <div class="taskDetails">
                                        <v-row>
                                            <v-col cols="3" class="font-weight-bold">
                                                Release:
                                            </v-col>
                                            <v-col cols="9">
                                                {{ info.release }}
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="3" class="font-weight-bold">
                                                Personas:
                                            </v-col>
                                            <v-col cols="9">
                                                <ul>
                                                    <li v-for="persona in info.personas" :key="persona">
                                                        {{ persona }}
                                                    </li>
                                                </ul>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="3" class="font-weight-bold">
                                                Task:
                                            </v-col>
                                            <v-col cols="9">
                                                {{ info.task }}
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="3" class="font-weight-bold">
                                                Outcome:
                                            </v-col>
                                            <v-col cols="9">
                                                {{ info.outCome }}
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="3" class="font-weight-bold">
                                                Scenarios:
                                            </v-col>
                                            <v-col cols="9">
                                                <ul>
                                                    <li v-for="scenario in info.scenarios" :key="scenario">
                                                        {{ scenario }}
                                                    </li>
                                                </ul>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                    <v-row class="summaryRow" v-if="(isDesignView || isReleaseView) ">
                        <v-expansion-panels v-model="designPanel">
                            <v-expansion-panel>
                                <v-expansion-panel-title class="summaryExpansionHeader">
                                    <v-row>
                                        <v-col cols="3" class="font-weight-bold d-flex align-center">Design</v-col>
                                        <v-col cols="9" class="d-flex align-center">Scenarios, Steps & Actions</v-col>
                                    </v-row>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="summaryExpansionContent">
                                    <v-expansion-panels v-model="scenariosPanel">
                                        <v-expansion-panel v-for="(scenario, scenarioInd) in scenarios" :key="scenario.scenarioName">
                                            <v-expansion-panel-title class="scenarioExpansionHeader">
                                                <v-row>
                                                    <v-col lg="3" md="3" sm="2" xs="2" class="font-weight-bold d-flex align-center">
                                                        Scenario {{ scenarioInd + 1 }}
                                                    </v-col>
                                                    <v-col lg="6" md="6" sm="8" xs="8" class="d-flex align-center">
                                                        {{ scenario.scenarioName }}
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-title>
                                            <v-expansion-panel-text class="scenarioExpansionContent">
                                                <v-expansion-panels multiple v-model="stepsPanel">
                                                    <v-expansion-panel v-for="(step, stepind) in scenario.steps" :key="stepind">
                                                        <v-expansion-panel-title class="stepExansionPanel">
                                                            <v-row>
                                                                <v-col lg="3" md="3" sm="2" xs="2" class="font-weight-bold d-flex align-center">
                                                                    Step {{ stepind + 1 }}
                                                                </v-col>
                                                                <v-col lg="6" md="6" sm="8" xs="8" class="d-flex align-center">
                                                                    {{ step.stepName }}
                                                                </v-col>
                                                            </v-row>
                                                        </v-expansion-panel-title>
                                                        <v-expansion-panel-text class="actionPanel">
                                                            <v-row v-for="(action, actionind) in step.actions" :key="actionind">
                                                                <v-col lg="3" md="3" sm="4" xs="2"
                                                                    class="font-weight-bold d-flex align-center">Action {{actionind + 1 }}
                                                                </v-col>
                                                                <v-col lg="9" md="9" sm="8" xs="10" class="d-flex align-center">{{action}}
                                                                </v-col>
                                                            </v-row>
                                                        </v-expansion-panel-text>
                                                    </v-expansion-panel>
                                                </v-expansion-panels>
                                            </v-expansion-panel-text>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
                    <v-row class="qumMericsRow">
                        <v-expansion-panels multiple v-model="summaryPanel">
                            <v-expansion-panel>
                                <v-expansion-panel-title class="userMetricsHeader">
                                    <v-row>
                                        <v-col cols="12" class="font-weight-bold d-flex align-center">
                                            Quantitative User Metrics
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-title>
                                <v-expansion-panel-text class="userMetricsContent">
                                    <v-row class="mt-1">
                                        <v-col cols="12">
                                            <v-card v-for="(metric, ind) in Object.keys(metrics) " :key="metric + ind" elevation="3"
                                                outlined rounded="lg" class="qum-table-cards">
                                                <v-row>
                                                    <v-col :lg="metric == 'compliances' || metric == 'consistencys' ? 12 : 6"
                                                        :md="metric == 'compliances' || metric == 'consistencys' ? 12 : 6" sm="12"
                                                        xs="12">
                                                        <div class="table-metricName font-weight-bold">
                                                            {{ metric === 'performanceMetrics'
                                                                ? 'Peformance Metrics'
                                                                : metric === 'browserPerformanceMetrics'
                                                                    ? 'Browser Performance'
                                                                    : metric === 'compliance'
                                                                        ? 'Compliance'
                                                                        : metric === 'consistency'
                                                                            ? 'Consistency'
                                                                            : metric
                                                            }}
                                                        </div>
                                                        <div class="table-container">
                                                            <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th class="qum-metrics-th">
                                                                            Metrics
                                                                        </th>
                                                                        <th class="qum-product-th">
                                                                            Product Target
                                                                        </th>
                                                                        <th v-if="isDesignView || isReleaseView"
                                                                            class="qum-design-th">
                                                                            Design Target {{  metric == 'consistency' ? '(Unique)' : "" }} 
                                                                        </th>
                                                                        <th v-if="isReleaseView" class="qum-actual-th">
                                                                            Actual {{  metric == 'consistency' ? '(Unique)' : "" }} 
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="item in metrics[metric]" :key="item.metric">
                                                                        <td class="qum-metrics-td">{{ item.metricName }}</td>
                                                                        <td class="qum-product-td">
                                                                            <ul
                                                                                v-if="metric === 'consistency' || metric === 'compliance'">
                                                                                <span v-if="item.product">
                                                                                    <li v-for="(product, index) in item.product"
                                                                                        :key="index">
                                                                                        {{ product ? product : '-' }}
                                                                                    </li>
                                                                                </span>
                                                                                <span v-else>
                                                                                    {{ item.product && item.product[0] ? item.product[0] : '-' }}
                                                                                </span>
                                                                            </ul>
                                                                            <span v-else>
                                                                                {{ item.product && item.product[0] ? item.product[0]  : '-' }}
                                                                            </span>
                                                                        </td>
                                                                        <td v-if="isDesignView || isReleaseView"
                                                                            class="qum-design-td">
                                                                            <ul v-if="metric === 'consistency'">
                                                                                <li v-for="designMetrics in Object.keys(item.design)"
                                                                                    :key="designMetrics">
                                                                                    {{ designMetrics }} - {{item.design[designMetrics] }}
                                                                                </li>
                                                                            </ul>
                                                                            <ul v-else-if="metric === 'compliance'">
                                                                                <li v-for="designMetrics in item.design"
                                                                                    :key="designMetrics">
                                                                                    {{ designMetrics }}
                                                                                </li>
                                                                            </ul>
                                                                            <span v-else>
                                                                                {{ item.design && item.design[0] ? item.design[0] : '-' }}
                                                                            </span>
                                                                        </td>
                                                                        <td v-if="isReleaseView" class="qum-actual-td">
                                                                            <ul v-if="metric === 'consistency'">
                                                                                <li v-for="designMetrics in Object.keys(item.actual)"
                                                                                    :key="designMetrics">
                                                                                    {{ designMetrics }} - {{
                                                                                    item.actual[designMetrics][0] }}
                                                                                </li>
                                                                            </ul>
                                                                            <ul v-else-if="metric === 'compliance'">
                                                                                <li v-for="designMetrics in item.actual"
                                                                                    :key="designMetrics">
                                                                                    {{ designMetrics }}
                                                                                </li>
                                                                            </ul>
                                                                            <span v-else>
                                                                                {{ item.actual && item.actual[0] ? item.actual[0] :
                                                                                '-' }}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </v-col>
                                                    <!-- <v-col lg="6" md="6" sm="12" xs="12" v-if="isReleaseView">
                                                        <div v-if="metric == 'performanceMetrics'" class="graphCard" elevation="3"
                                                            outlined rounded="lg">
                                                            <canvas id="performace-bar-chart" height="250"></canvas>
                                                        </div>
                                                        <div v-if="metric == 'browserPerformanceMetrics'" class="graphCard"
                                                            elevation="3" outlined rounded="lg">
                                                            <canvas id="browser-bar-chart" height="250"></canvas>
                                                        </div>
                                                    </v-col> -->
                                                </v-row>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script setup>
import { ref,onMounted,computed,watch } from 'vue';
    const typeOfReportSelected = ref("");
    const userStorySelected = ref("");
    const typeOfReportList = ref([
    { title: "Functional", value: "functional" },
    { title: "Design", value: "design" },
    { title: "Release", value: "release" },
    ]);

    const userStoryList = ref([
        {title: "User Story 1", value: "userstory 1"},
        {title: "User Story 2", value: "userstory 2"},
        {title: "User Story 3", value: "userstory 3"},
    ]);

    const metricsPanel = ref(0);

    const info = ref({
            "applicationName": "Medi Care",
            "release": "2.0.1",
            "personas": [
            "Admin",
            "Patient",
            "Doctor"
            ],
            "task": "Appointment Booking",
            "scenarios": [
            "ReserveRoom Through Filters"
            ],
            "outCome": "Sucessful appointment booking"
        });

    const scenarios = ref([{
                            "scenarioName": "ReserveRoom Through Filters",
                            "steps": [
                                {
                                "name": "Select Room",
                                "actions": [
                                    "open example.com",
                                    "Click on the Rooms",
                                    "Click on the selected Room",
                                    "Switching to the Tab"
                                ]
                                },
                                {
                                "name": "Reserve Room",
                                "actions": [
                                    "Click on close of Translation",
                                    "Click on the Check In ",
                                    "Select the date",
                                    "Click on the check out",
                                    "Select the check out date",
                                    "Click on the Gustinfo",
                                    "Adding Adult",
                                    "Click on the Infants",
                                    "Click on the Guestinfo close",
                                    "Click on the Reserve"
                                ]
                                }
                            ]
                            }
                        ]);
    const productPanel = ref([1]);
    const designPanel = ref([0]);
    const summaryPanel = ref([0]);
    const scenariosPanel = ref([0]);
    const stepsPanel = ref([0]);
    const changeViewAsQueryParam = ref("actual");
    const selectedGraph = ref("");
    const selectedMetric = ref("");
    const isProductView = ref(false);
    const isDesignView = ref(false);
    const isReleaseView = ref(false);
    const metrics = ref({
        "performanceMetrics": [
        {
            "metricName": "User Action Counts",
            "product": [
            "5"
            ],
            "design": [
            "7"
            ],
            "actual": [
            "14"
            ]
        },
        {
            "metricName": "Total Time Taken",
            "product": [
            "10 sec"
            ],
            "design": [
            "11 sec"
            ],
            "actual": [
            "43.48 sec"
            ]
        }
        ],
        "browserPerformanceMetrics": [
        {
            "metricName": "Page Completion Time",
            "design": [
            "2 sec"
            ],
            "actual": [
            "13.83 sec"
            ]
        },
        {
            "metricName": "Content Download Time",
            "design": [
            "1 sec"
            ],
            "actual": [
            "0.25 sec"
            ]
        }
        ],
        "compliance": [
        {
            "metricName": "Internationalization",
            "product": [
            "English",
            "German"
            ],
            "design": [
            "English",
            "German"
            ],
            "actual": [
            "js-774",
            "Hindi-1546"
            ]
        }
        ],
        "consistency": [
        {
            "metricName": "Design Hygiene",
            "design": {
            "Fonts": "4",
            "Font Sizes": "6",
            "Colors": "7",
            "BG Color": "2"
            },
            "actual": {
            "Fonts": "2",
            "Font Sizes": "14",
            "Colors": "8",
            "BG Color": "3"
            }
        }
        ]
    });
    // let qumMetricsGraphData = reactive({});
    const taskTimeData = ref({
        labels: ["Task 1", "Task 2"],
        datasets: [
            {
                label: "Persona 1",
                data: [30, 50],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: "Persona 2",
                data: [20, 40],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }
        ]
    });

    onMounted(() => {
        summaryPanel.value = [1];
        console.log(typeOfReportSelected.value);
        // const ctx = document.getElementById('task-time-chart').getContext('2d');
        // new Chart(ctx, {
        //         type: 'bar',
        //         data: taskTimeData.value,
        //         options: {
        //             responsive: true,
        //             scales: {
        //                 y: {
        //                     beginAtZero: true
        //                 }
        //             }
        //         }
        //     });
    });

    watch(typeOfReportSelected, (newValue) => {
        console.log('Selected report changed:', newValue.value);
        isReleaseView.value = newValue.value == "release" ? true : false;
        isProductView.value = newValue.value == "functional" ? true : false;
        isDesignView.value = newValue.value == "design" ? true : false;
        designPanel.value = newValue.value == "design" ? [1] : [0];
    // Add additional logic here as needed
    })
    
</script>

<style>
        /* Add your styles here */
        .v-expansion-panel-title {
            padding: 5px 15px !important;
        }

        .taskExpansionPanel {
            background-color: #feeec0;
            font-size: clamp(14px, 4vw, 22px) !important;
        }

        .taskExpansionContent {
            background-color: #fffbf1;
        }

        .taskDetails {
            font-size: clamp(13px, 4vw, 20px) !important;
            padding: 12px 0;
        }

        .taskDetails ul {
            margin-left: 18px;
        }

        .summaryRow {
            margin-top: 25px !important;
        }

        .summaryExpansionHeader {
            background-color: #daedc4;
            font-size: clamp(14px, 4vw, 22px) !important;
        }

        .summaryExpansionContent {
            padding-top: 10px;
            background-color: #f9fff0;
        }

        .scenarioExpansionHeader {
            background-color: #daedc4;
            font-size: clamp(13px, 4vw, 20px) !important;
        }

        .scenarioExpansionContent {
            padding-top: 10px;
            background-color: #f9fff0;
        }

        .stepExansionPanel {
            font-size: clamp(12px, 4vw, 18px) !important;
            background-color: #daedc4;
        }

        .actionPanel {
            padding-top: 15px;
            font-size: clamp(11px, 4vw, 16px) !important;
            background-color: #f9fff0;
        }

        .qumMericsRow {
            margin-top: 25px !important;
        }

        .userMetricsHeader {
            background-color: #e2ddff;
            font-size: clamp(14px, 4vw, 22px) !important;
        }

        .userMetricsContent {
            background-color: #ffffff;
        }

        .v-expansion-panel-title__overlay {
            opacity: 0 !important;
        }

        .graphCard {
            height: 100%;
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            padding: 10px;
        }

        .qum-table-cards {
            margin-bottom: 15px;
        }

        .table-metricName {
            margin: 15px 0 0 15px;
            font-size: clamp(11px, 4vw, 18px);
        }

        .qum-metrics-th {
            background-color: #90c1f2;
        }

        .qum-product-th {
            background-color: #ffe188;
        }

        .qum-design-th {
            background-color: #88d567;
        }

        .qum-actual-th {
            background-color: #b6a3ed;
        }

        .qum-metrics-td {
            background-color: #bcd8f3;
        }

        .qum-product-td {
            background-color: #fff3cc;
        }

        .qum-design-td {
            background-color: #d9ead3;
        }

        .qum-actual-td {
            background-color: #d9d2e9;
        }

        .table-container {
            overflow-x: auto;
            padding: 10px;
            font-size: 16px;
        }

        .table-container table {
            width: 100%;
            border-collapse: collapse;
        }

        .table-container th,
        .table-container td {
            padding: 6px;
            text-align: left;
            border: 5px solid white;
            word-break: break-word;
        }

        .table-container td {
            font-weight: 500 !important;
        }

        .table-container td ul {
            margin-left: 8px;
        }

        .table-container td ul li {
            word-break: break-all;
        }

        .v-expansion-panel-text__wrapper {
            padding: 0 15px 12px !important;
        }

        @media (max-width: 991px) {
            .table-container {
                font-size: 15px;
            }
        }

        @media (max-width: 767px) {
            .table-container {
                font-size: 14px;
            }
        }

        @media (max-width: 600px) {
            .table-container {
                font-size: 13px;
            }

            .qum-table-cards .col {
                flex-basis: fit-content !important;
            }
        }

        @media (max-width: 420px) {
            .table-container {
                font-size: 12px;
            }

            .qum-table-cards .col {
                flex-basis: fit-content !important;
            }
        }

        ul {
            list-style-type: disc;
            list-style-position: inside;
        }
    </style>