
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetifyPlugin from "./plugins/vuetify.plugin";
import componentloaderPlugin from "./plugins/componentloader.plugin";
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetifyPlugin);
app.use(componentloaderPlugin);
app.mount("#app");
