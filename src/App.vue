<template>
  <v-app id="app">
    <HeaderComponent />
    <v-main>
      <v-container fluid>
        <HomePage />
        <RouterView />
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script setup>
import HomePage from './components/HomePage.vue';
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<style>
html {
  /* overflow-y: hidden !important; */
  color: #455a64;
}

* {
  text-transform: none !important;
  font-family: sans-serif;

}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px; */
}

.v-main {
  /* background-color: #dae8fc !important; */
  padding: 20px !important;
  height: 100%;
  flex: auto !important;
}

.col {
  padding: 8px !important;
}

.submit-btn {
  margin-top: 15px;
  text-align: center;
}

/* CSS for Scroll Bar*/
div::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

div::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0);
}

div::-webkit-scrollbar-track {
  background: #e4e4ef;
  /* border-left: 1px solid #2c2c2c; */
  border-radius: 7px;
}

div::-webkit-scrollbar-thumb {
  background: #726d6d;
  border-radius: 7px;
}

div::-webkit-scrollbar-thumb:hover {
  background: gray;
}
</style>
