import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";

const metaManager = createMetaManager();
const app = createApp(App);

app.use(store).use(router).use(metaManager).use(metaPlugin);

router.isReady().then(() => app.mount("#app"));
