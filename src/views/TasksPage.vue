<template>
    <div>
        <h1>Tasks</h1>
        <v-form>
            <v-text-field
                label="Description"
                v-model="description"
                outlined
            ></v-text-field>

            <v-btn class="mt-2" type="submit" block>Submit</v-btn>
        </v-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const description = ref("");
</script>

<style>
</style>