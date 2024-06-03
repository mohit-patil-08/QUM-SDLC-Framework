<template>
  <div>
    <h1>Scenarios</h1>
    <v-form>
      <v-text-field label="Description" v-model="description" outlined></v-text-field>

      <v-text-field label="Outcome" v-model="outcome" outlined></v-text-field>

      <v-select v-model="tasksSelected" :items="tasksList" label="Tasks" return-object color="black" item-color="black"
        item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
      </v-select>

      <div class="submit-btn">
        <v-btn type="submit" color="primary">Submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
const outcome = ref("");
const tasksSelected = ref(null);
const tasksList = ref([
  { title: "Task 1", value: "task1" },
  { title: "Task 2", value: "task2" },
  { title: "Task 3", value: "task3" },
]);
</script>

<style></style>