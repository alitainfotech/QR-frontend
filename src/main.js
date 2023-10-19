
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vuetifyPlugin from "./plugins/vuetify.plugin";
import componentloaderPlugin from "./plugins/componentloader.plugin";
import componentloaderPhase2Plugin from "./plugins/componentloaderPhase2.plugin";
import '@vuepic/vue-datepicker/dist/main.css'
import VueDatePicker from '@vuepic/vue-datepicker';


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetifyPlugin);
app.use(componentloaderPlugin);
app.use(componentloaderPhase2Plugin)
app.component('VueDatePicker', VueDatePicker);
app.mount("#app");
