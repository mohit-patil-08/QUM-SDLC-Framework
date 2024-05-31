import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";


const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
});

const app = createApp(App);
app.use(router).use(vuetify).mount("#app");
