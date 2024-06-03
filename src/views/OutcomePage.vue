<template>
    <div>
        <h1>Outcome</h1>
        <v-form>
            <v-text-field
                label="Description"
                v-model="description"
                outlined
            ></v-text-field>
        </v-form>
        <v-select v-model="personaSelected" :items="personasList" label="Persona"
            return-object variant="underlined" density="comfortable" color="black" item-color="black"
            item-title="title" hide-details :menu-props="{ scrollStrategy: 'none' }">
          </v-select>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
const personaSelected = ref(null);
const personasList = ref([
    {title: "Persona 1", value: "persona1"},
    {title: "Persona 2", value: "persona2"},
    {title: "Persona 3", value: "persona3"},
]);
</script>

<style>
</style>