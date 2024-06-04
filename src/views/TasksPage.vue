<template>
    <div>
        <h1>Tasks</h1>
        <v-form>
            <v-text-field label="Name" v-model="name" outlined></v-text-field>

            <v-text-field label="Description" v-model="description" outlined></v-text-field>

            <div class="submit-btn">
                <v-btn type="submit" color="primary">Submit</v-btn>
            </div>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const name = ref("");
const description = ref("");
</script>

<style></style>