<template>
    <div class="pageNavigaton">
        <div><RouterLink to="/tasks">Task</RouterLink></div>
        <div><RouterLink to="/scenarios">Scenarios</RouterLink></div>
        <div><RouterLink to="/persona">Persona</RouterLink></div>
        <div><RouterLink to="/outcome">Outcome</RouterLink></div>
        <div><RouterLink to="/steps">Steps</RouterLink></div>
        <div><RouterLink to="/flows">Flows</RouterLink></div>
    </div>
</template>

<script setup>
</script>

<style>
.pageNavigaton {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>